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



const Layout = props => (
  <ThemeProvider theme={theme}>
  <div id='outer-container'>

  <GlobalStyle />

  <MobileNav pageWrapId={"page-wrap"}/>
  <Wrapper id='page-wrap'>
    <Header />
    <Body>
    {props.children}
    </Body>
  </Wrapper>
  </div>
  </ThemeProvider>
);

//<Footer />

export default Layout;