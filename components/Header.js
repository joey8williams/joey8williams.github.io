import Link from 'next/link';
import Nav from '../styles/Nav';
import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/name.gif';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react'
import background from '../assets/background.png';

const LogoLanding = styled.img`
  height:auto;
  width:10%;
  min-width:130px;

`;

const Wrapper = styled.div`
  height:10vh;
  width:100%;
  position:fixed;
  top:0px;
  color: ${theme.white};
  background-color: ${theme.transparent};
  background-image: url(${background});
  display:flex;
  justify-content: space-between;
  z-index:1;

`;
//      <Link href='/Projects'>
//      <a>Projects</a>
//      </Link>

export default class Header extends Component {
  render() {
    return (
      <Wrapper onScroll={this.handleScroll}>
        <Nav>
          <Link href='/index'><a>Home</a></Link>
          <Link href='/Resume'><a>Resume</a></Link>
          <Link href='/About'><a>About</a></Link>
          <a href='https://github.com/joey8williams' target='_blank'>
          <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a href='https://www.linkedin.com/in/joey-williams-5a279187/' target='blank'>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </Nav>
        <LogoLanding src={Logo} alt="Image"></LogoLanding>
      </Wrapper>
    )
  }

}

