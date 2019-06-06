import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/name.gif';


const Wrapper = styled.div`
  grid-row:3;
  background-color: ${theme.primary};
  color: ${theme.white};
  border-top: 2px solid ${theme.black};
  display:flex;
  justify-content: flex-end;
`;

const LogoLanding = styled.img`
  height:100%;
  width:10%;

`;

const Footer = () => (
  <Wrapper>
    <LogoLanding src={Logo} alt="Image"></LogoLanding>
  </Wrapper>
)


export default Footer;