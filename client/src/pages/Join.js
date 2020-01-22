import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';

import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/colors';

const onChange = (saveVal) => (event) => {
    saveVal(event.target.value)
};

const Header = styled.h1`
    padding: 1rem 1.5rem;
    background: ${Colors.secondary};
`;

export const Join = () => {
    const [ name, setName ] = useState('');
    const [ channel, setChannel ] = useState('');
    const disabled = '' === name || channel === '';
    return (
        <PageWrapper>
            <GlobalStyles />
            <Header>Join</Header>
            <Input placeholder="Name" type="text" onChange={onChange(setName)} />
            <Input placeholder="Channel" type="text" onChange={onChange(setChannel)} />
            <Link to={`/chat?name=${name}&channel=${channel}`}>
                <Button disabled={disabled} type="submit">Join</Button>
            </Link>
        </PageWrapper>
    )
}
