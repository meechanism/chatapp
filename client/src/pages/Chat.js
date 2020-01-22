import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Config from '../config';
import GlobalStyles from '../styles/GlobalStyles';

import { PageWrapper } from '../components/PageWrapper'
import { ChannelBar } from '../components/ChannelBar'
import { SendMsgForm } from '../components/SendMsgForm'
import { MessageList } from '../components/MessageList'

let socket;

export const Chat = ({ location }) => {
    const [ name, setName ] = useState('');
    const [ channel, setChannel ] = useState('');
    const [ message, setMessage ] = useState([]);
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        const { channel, name } = queryString.parse(location.search)

        socket = io(Config.ioEndpoint)
        setName(name);
        setChannel(channel);

        // Tell server when a user joins a channel
        socket.emit('join', { name, channel }, () => {
            console.log(`Server successfully saw ${name} joined ${channel}`)
        });

        // Unmount and disconnect effects
        return () => {
            socket.emit('disconnect');

            // Turns instance of this chat client off
            socket.off();
        }
    }, [Config.ioEndpoint, location.search]);

    // Handle message changes
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        // Clear our input field after sending msg
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (<PageWrapper>
        <GlobalStyles />
        <ChannelBar channel={channel} />
        <MessageList messages={messages} name={name} />
        <SendMsgForm  message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </PageWrapper>);
}
