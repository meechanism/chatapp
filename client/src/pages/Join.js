import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/colors';

const onChange = (saveVal) => (event) => {
    saveVal(event.target.value)
};

const Header = styled.h1`
    padding: 1rem 1.5rem;
    margin: 0;
    text-align: center;
`;

const Wrapper = styled.div`
    margin: 2rem auto;
    width: 400px;
    border: 1px solid ${Colors.gray2};
    border-radius: 2px;
`;

export const Join = () => {
    const [ name, setName ] = useState('');
    const [ channel, setChannel ] = useState('');
    const disabled = '' === name || channel === '';
    return (
        <Wrapper>
            <GlobalStyles />
            <Header>Join a chat channel!</Header>
            <Input placeholder="Your name" type="text" onChange={onChange(setName)} />
            <Input placeholder="Channel name" type="text" onChange={onChange(setChannel)} />
            <Link to={`/chat?name=${name}&channel=${channel}`}>
                <Button disabled={disabled} type="submit">Join</Button>
            </Link>
        </Wrapper>
    )
}
