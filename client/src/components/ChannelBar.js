import React from 'react';
import styled from 'styled-components';

import Colors from '../styles/colors';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Colors.black};
    padding: 1rem 1.5rem;
    border:
`;

const Name = styled.h1`
    margin: 0;
    font-size: 1rem;
    color: ${Colors.white};
`;

const Exit = styled.i`
    display: inline-block;
    font-style: normal;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${Colors.white};
    &:before {
        content: "×";
    }
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const ChannelBar = ({ channel, history }) => (
    <Wrapper>
        <Name>{channel}</Name>
        <Exit onClick={(e) => history.push('/')}/>
    </Wrapper>
)
