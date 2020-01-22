import styled from 'styled-components';
import Colors from '../styles/colors';

export const Input = styled.input`
    display: block;
    border: 0;
    box-sizing: border-box;
    line-height: 1rem;
    margin: 0;
    padding: 1rem 1.5rem;
    text-decoration: none;
    width: 100%;

    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    }
`;
