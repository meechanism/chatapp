import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { Input } from './Input';

const Wrapper = styled.div`
    display: flex;
`;

export const InputMessage = () => {
    return (<Wrapper>
        <Input />
        <Button>Send</Button>
    </Wrapper>)
}