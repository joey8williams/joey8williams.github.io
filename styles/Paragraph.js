import styled from 'styled-components';
import theme from './theme';


const Paragraph = styled.p`
  font-size: ${theme.f0};
  margin-top:15px;
  color: ${props => props.white ? theme.white : theme.black}
`;


export default Paragraph;