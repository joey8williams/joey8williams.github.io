import styled from 'styled-components';
import theme from './theme';

const Nav = styled.nav`
  background-color:${theme.white};
  height:100%;
  display:inline-flex;


  a{
    width:100px;
    text-align:center;
    line-height:${theme.headerHeight};
    display:block;
    background-color:${theme.primary};
    color: ${theme.white};
    font-size: ${theme.f1};
    cursor: pointer;
    transition-property: font-size;
    transition-duration: 250ms;
    transition-timing-function: linear;

    &:hover{
      font-size:${theme.f0};

    }
  }

`;

export default Nav