import styled from 'styled-components';
import theme from './theme';

const SubHeading = styled.h2`
  position: relative;
  font-size: ${theme.f2};
  color: ${props => props.white ? theme.white : theme.primary};
  text-align: ${props => props.center ? "center" : "left"};
  padding-top:1rem;


  &::before{
    content:"";
    position: absolute;
    left:12.5%;
    top:0px;
    width: 75%;
    height: 200px;
    border-top: 0.3rem ${theme.white} solid;
  }
`;

export default SubHeading;