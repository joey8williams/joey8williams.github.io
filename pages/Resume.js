import Layout from "../components/Layout";
import pdf from '../assets/resume.png';
import styled from 'styled-components';
import Paragraph from "../styles/Paragraph";
import MainHeading from "../styles/MainHeading";
import theme from '../styles/theme';
import Link from '../styles/Link';
import Body from "../styles/Body";

const FlexView = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
`;

const TextWrapper = styled.div`
  min-width:330px;
  max-width:600px;
  padding-left:10px;
`;

const ResumeWrapper = styled.div`
  margin-top:20px;
  padding-right:40px;
  display:inline-block;
  max-width:600px;
  min-width:330px;
`;

const ResumeLanding = styled.img`
  width:100%;
  height:auto;
  border: 1px solid ${theme.black};
`;




const Resume = () => (
  <Layout>
    <Body>
    <FlexView>
      <ResumeWrapper>
        <ResumeLanding src={pdf} />
      </ResumeWrapper>

      <TextWrapper>
        <MainHeading primary>The Over-Architected Resume</MainHeading>
        <Paragraph>
        Every now and then, limitations can lead you down a new path.
        I am no expert at Word or any other application for formatting text,
        and previously I had tried my best to make a presentable resume
        only to come up short. This lead me down a path to try something
        new by leaning on more familiar languages: HTML, and CSS via
        <Link href='https://sass-lang.com/' target="_blank"> Sass</Link>
        </Paragraph>
        <Paragraph>
        The resume is divided into 4 distinct sections: Contact,
        Employment, Education, and Skills. The entire page is laid
        with CSS grid. All sub sections are laid out with CSS grid as well,
        with exception to the Skills section.
        </Paragraph>
        <Paragraph>
        The Skills section has 3 categories that are spaced via flexbox.
        Each category contains child nodes with are spaced by yet another
        display:flex. I went this route over CSS grid because it made
        adding skills MUCH simpler.
        </Paragraph>
        <Paragraph>
        By this time I had all of my sections laid out, had all of their
        respective CSS divided into SCSS files and imported into a main file,
        and had spent more time than I care to admit refactoring reused SCSS into
        mixins. I decided to go one step further - why not add external libraries
        into the mix? Big thanks to <Link href='https://fontawesome.com'>FontAwesome </Link>
         and <Link href='https://tachyons.io' target="_blank">Tachyons CSS </Link>
        for taking care of all the icons and styling.
        </Paragraph>
        <Paragraph>
        While in hindsight I recognize I in fact did not choose the best tool for
        the job, it ended up being great experiment with HTML/CSS without the
        requirement of responsive design.. for now. It definitely wasn't the fast
        route, but it was a nice opportunity to take the road less traveled.
        </Paragraph>
      </TextWrapper>
    </FlexView>
    </Body>

  </Layout>
);

export default Resume;