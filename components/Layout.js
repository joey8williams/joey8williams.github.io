import Header from './Header';
import Footer from './Footer';
import '../styles/css/site.css';
import styled, {ThemeProvider} from 'styled-components';
import theme, {GlobalStyle} from '../styles/theme';


const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh auto 10vh;
  min-height:100vh;
  width: 100vw;
  margin:0;
`;

const Body = styled.div`
  grid-row:2/4;
  background-color:${theme.white};
  color:${theme.black};
  box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.61);
  padding:2%;
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
  <Wrapper>
  <GlobalStyle />
    <Header />
    <Body>
    {props.children}
    </Body>
  </Wrapper>
  </ThemeProvider>
);

//<Footer />

export default Layout;