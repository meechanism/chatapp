import React from 'react';
import styled from 'styled-components';

import Colors from '../styles/colors';

const Wrapper = styled.li`
    width: 100%;
    display: relative;
    margin: 0 0 1.5rem;
`;

const User = styled.span`
    display: block;
    margin: 0 0 0.25rem;
    font-size: 0.75rem;
    text-align:  ${props => props.isSentByCurrUser ? 'right' : 'left' };
`;

const Text = styled.p`
    background: ${props => props.isSentByCurrUser ? Colors.secondary : Colors.gray1 };
    border-radius: 0.5rem;
    color: ${props => props.isSentByCurrUser ? Colors.white : Colors.black };
    float: ${props => props.isSentByCurrUser ? 'right' : 'left'};
    margin: 0;
    padding: 0.5rem 1rem;
`;

export const Message = ({ message, name }) => {
    const { text, user } = message;
    const normalizedName = name.trim().toLowerCase();
    let isSentByCurrUser = normalizedName === user;

    return (<Wrapper className="cf">
        <User isSentByCurrUser={isSentByCurrUser}>{user}</User>
        <Text isSentByCurrUser={isSentByCurrUser}>{text}</Text>
    </Wrapper>)
}