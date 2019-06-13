import Header from './Header';
import '../styles/css/site.css';
import styled, {ThemeProvider} from 'styled-components';
import theme, {GlobalStyle} from '../styles/theme';
import background from '../assets/background.png';
import MobileNav from './MobileNav';


const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh auto 10vh;
  min-height:100vh;
  width: 100vw;
  margin:0;
  background-image: url(${background});
  z-index: 0;
`;

const Body = styled.div`
  grid-row:2/4;
`;


import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div id='outer-container'>

      <GlobalStyle />

      <MobileNav pageWrapId={"page-wrap"}/>
      <Wrapper id='page-wrap' onScroll={this.handleScroll}>
        <Header />
        <Body>
        {this.props.children}
        </Body>
      </Wrapper>
      </div>
      </ThemeProvider>
    )
  }

  handleScroll(e){
    console.log('scrolling');
    console.log(e);
  }

}

