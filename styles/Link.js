import styled from 'styled-components';
import theme from './theme';


const Link = styled.a`
  font-weight: ${theme.fw1};
  color: ${theme.primary};
  position: relative;
  text-decoration: none;

  &:before{
    content: " ";

    position:absolute;
    width:100%;
    height:2px;
    bottom:-2px;
    left:0px;
    background-color: ${theme.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover{
    &:before{
      visibility: visible;
      transform: scaleX(1);
    }
  }



`;

export default Link;