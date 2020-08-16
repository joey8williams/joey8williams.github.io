import {slide as Menu} from 'react-burger-menu';
import React, { Component } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import theme from '../styles/theme';

const displayBlock = {
  display: 'block',
  color: theme.white
}
const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px'
  },

  bmBurgerBars: {
    background: theme.white,
    height:'6px',
    width: '36px',

  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display:'block',
    color: theme.white,
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    color: theme.white,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
/**
 *
        <Link  href='/Resume'>
        <a id='resume' className="menu-item" styles={displayBlock}>Resume</a>
        </Link>
 */
export default class MobileNav extends Component {
  showSettings(e){
    e.preventDefault();
  }
  render(props) {
    return (
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={styles}>
        <Link  href='/index'>
        <a  id="home" className="menu-item" styles={displayBlock}>Home</a>
        </Link>
        <Link   href='/About'>
        <a id='about' className="menu-item" styles={displayBlock}>About</a>
        </Link>
        <a    className="menu-item"  href='https://github.com/jowi-dev' target='_blank'>
        <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a href='https://www.linkedin.com/in/joey-williams-5a279187/' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </Menu>
    )
  }
}
