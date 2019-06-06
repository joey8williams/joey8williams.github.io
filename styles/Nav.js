import styled from 'styled-components';
import theme from './theme';

const Nav = styled.nav`
  background-color:${theme.white};
  height:100%;
  display:inline-flex;


  a{
    width:100px;
    border-right: 1px solid ${theme.white};
    text-align:center;
    line-height:${theme.headerHeight};
    display:block;
    background-color:${theme.primary};
    color: ${theme.white};
  }
`;

export default Nav