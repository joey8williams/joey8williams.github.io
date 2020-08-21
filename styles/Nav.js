import styled from 'styled-components';
import theme from './theme';


const Nav = styled.nav`
  height:100%;
  width:100%;
  display:inline-flex;
  justify-content: space-between;
  padding: 0px 25px;


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

    text-shadow:
    -1px -1px 0 ${theme.black},
		1px -1px 0 ${theme.black},
		-1px 1px 0 ${theme.black},
		1px 1px 0 ${theme.black};

    &:hover{
      font-size:${theme.f0};

    }
    @media(max-width:728px){
      display:none;

    }


  }

`;

export default Nav