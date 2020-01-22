import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { Button } from './Button';
import Colors from '../styles/colors';

const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    border-top: 1px solid ${Colors.black};
`;

export const SendMsgForm = ({ message, setMessage, sendMessage }) => {
    const disabled = message.length === 0;
    return (<Wrapper>
        <Input type="text"
            value={message}
            placeholder="Your message..."
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <Button disabled={disabled} block onClick={e => sendMessage(e)}>Send</Button>
    </Wrapper>)
}
