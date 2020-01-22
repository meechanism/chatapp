import styled from 'styled-components';
import Colors from '../styles/colors';

import MediaQuery, { Breakpoints } from '../styles/mediaQueries';

export const PageWrapper = styled.div`
    border: 1px solid ${Colors.black};
    margin: 0 auto;
    width: ${Breakpoints.medium};

    ${MediaQuery.medium`
        width: auto;
        margin: 0;
    `};
`;
