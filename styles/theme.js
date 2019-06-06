import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: "Titillium Web", sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Titillium+Web')
    format('woff2');
    font-weight: normal;
    font-style:normal;
  }
  html{
    font-family:"Titillium Web", sans-serif;
    box-sizing: border-box;
  }
  *, *:before, *:after{
    box-sizing:inherit;
  }
  body{
    padding:0;
    margin:0;
    font-size:1rem;
    line-height:2;
  }
  a{
    text-decoration: none;
  }
`;

const theme = {
  //Colors
  black: '#403D4B',
  white: "#FDFDFE",
  primary: "rgb(23,58,122)",

  //Fonts
  font: "Titillium Web, sans-serif",

  //Z index levels
  l0: 0,
  l1: 1,
  l2: 2,

  //Heights that are used in more than one place
  headerHeight: "10vh"
}

export default theme;