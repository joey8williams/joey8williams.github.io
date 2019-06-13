import styled from 'styled-components';
import theme from './theme';

const MainHeading = styled.h1`
  color: ${props => props.primary ? theme.primary : theme.white};
  margin: 0;
  font-size: ${props => props.bigger ? "3.5rem" : "2.5rem"};
  text-align: ${props => props.center ? "center" : "left"};
`;

export default MainHeading;