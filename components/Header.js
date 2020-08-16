import Link from 'next/link';
import Nav from '../styles/Nav';
import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/name.gif';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react'

const LogoLanding = styled.img`
  height:auto;
  width:7%;
  min-width:85px;
  max-height:60px;
  padding-top:10px;
  padding-right:10px;

`;


const Wrapper = styled.div`
  opacity:1;
  height:10vh;
  width:100%;
  position:fixed;
  top:0px;
  color: ${theme.white};
  background-color: ${theme.transparent};
  display:flex;
  justify-content: space-between;
  z-index:2;

  box-shadow: ${props => props.noshadow ? '' : '0px 0px 20px 1px rgba(0,0,0,0.61)'};

`;
//      <Link href='/Projects'>
//      <a>Projects</a>
//      </Link>
// <Link href='/Resume'><a>Resume</a></Link>
const Header    = (props) => (
    <Wrapper noshadow={props.noshadow}>
      <Nav>
        <Link href='/index'><a>Home</a></Link>
        <Link href='/About'><a>About</a></Link>
        <a href='https://github.com/jowi-dev' target='_blank'>
        <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a href='https://www.linkedin.com/in/joey-williams-5a279187/' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </Nav>
    </Wrapper>
);

export default Header;