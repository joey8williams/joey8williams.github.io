import styled from 'styled-components';
import theme from './theme';


const Nav = styled.nav`
  height:100%;
  display:inline-flex;


  a{
    width:100px;
    text-align:center;
    line-height:${theme.headerHeight};
    display:block;
    background-color: inherit;
    color: ${theme.white};
    font-size: ${theme.f1};
    cursor: pointer;
    transition-property: font-size;
    transition-duration: 250ms;
    transition-timing-function: linear;

    &:hover{
      font-size:${theme.f0};

    }
    @media(max-width:728px){
      display:none;

    }


  }

`;

export default Nav