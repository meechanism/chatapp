import React from 'react';
import styled from 'styled-components';
import { Message } from './Message';

const Wrapper = styled.ul`
    box-sizing: border-box;
    margin: 1rem 1.5rem;
    padding: 0;
    list-style: none;
`;

export const MessageList = ({ messages, name }) => {
    return (
        <Wrapper>
            {messages.map((msg, i) => <Message key={i} message={msg} name={name} />)}
        </Wrapper>
    );
}