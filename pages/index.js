import Layout from '../components/Layout';
import Paragraph from '../styles/Paragraph';
import MainHeading from '../styles/MainHeading';
import SubHeading from '../styles/SubHeading';
import Article from '../styles/Article';
import Link from '../styles/Link';
import styled from 'styled-components';
import theme from '../styles/theme';
import name from '../assets/name.gif';

const Wrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index:1;
`;

const GifWrapper = styled.div`
  width:80%;
`;
const Gif = styled.img`
  width:100%;
`;



/**
 * This page is the attention getter. Content is reserved
 * for other pages.
 */
const Index = () => (
  <Layout>
    <Wrapper>
    <div>
      <MainHeading primary={false} bigger={true} center={true}>Developer, Innovator, Team Player</MainHeading>
    </div>
    <div>
    <SubHeading white={true} center={true}>Let's build something great together</SubHeading>
    </div>
    </Wrapper>


  </Layout>
)

export default Index;