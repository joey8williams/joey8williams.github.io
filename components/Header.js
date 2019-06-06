import Link from 'next/link';
import MyLink from '../styles/Link';
import Nav from '../styles/Nav';
import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/name.gif';
//import Resume from '../assets/Resume.pdf';

const LogoLanding = styled.img`
  height:100%;
  width:10%;

`;

const Wrapper = styled.div`
  grid-row:1;
  background-color: ${theme.primary};
  color: ${theme.white};
  border-bottom: 2px solid ${theme.black};
  display:flex;
  justify-content: space-between;
`;

const Header = () => (
  <Wrapper>
    <Nav>
      <Link href='/index'><a>Home</a></Link>
      <Link href='/Resume'>
      <a>Resume</a>
      </Link>
      <a href='https://github.com/joey8williams' target='_blank'>
      Github
      </a>
      <a href='https://www.linkedin.com/in/joey-williams-5a279187/' target='blank'>
        LinkedIn
      </a>
    </Nav>

    <LogoLanding src={Logo} alt="Image"></LogoLanding>
  </Wrapper>


);

export default Header;