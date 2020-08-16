import Layout from '../components/Layout';
import Paragraph from '../styles/Paragraph';
import MainHeading from '../styles/MainHeading';
import Article from '../styles/Article';
import Link from '../styles/Link';
import Body from '../styles/Body';
import Header from '../components/Header';


const About = () => (
  <Layout>
  <Header />
  <Body>
  <Article>
  <MainHeading primary={true} bigger={false} center={false}>About</MainHeading>
  <Paragraph>
  I am currently in search for a new role as a Software Engineer. I've previously worked as either a front end or full stack developer
  in both the public and private sectors. Feel free to see some of my side projects via the github link, or my work experience via the
  LinkedIn link.
  </Paragraph>

  <Paragraph>
  My previous work experience has included many major front end frameworks - Ember.js, React, Angular, as well as framwork-free
  environments. I am comfortable working in any although I have a preference toward Ember. Server side my professional experience
  has been in Node.js (express, Sails), .NET, and my side project experience always seems to lead me back to Elixir/Phoenix. I love
  the challenge of learning new languages or frameworks and would enjoy the opportunity to bring my previous experience to the table
  or add a new skillset. I look forward to getting to getting to know you.
  </Paragraph>

  <Paragraph>
  -Joe
  </Paragraph>

  <Paragraph>
  </Paragraph>
  </Article>
  </Body>
  </Layout>
);


export default About;