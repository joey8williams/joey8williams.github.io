import Layout from '../components/Layout';
import Paragraph from '../styles/Paragraph';
import MainHeading from '../styles/MainHeading';
import Article from '../styles/Article';
import Todo from '../styles/Todo';
import Link from '../styles/Link';

const Index = () => (
  <Layout>
  <Article>
  <MainHeading>About the Author</MainHeading>
  <Paragraph>
  Thank you for taking a moment to browse my site. If there are any questions
  I can answer for you, please don't hesitate to reach out via the "contact"
  button on the right side of the page <Todo/>. This page is an introduction to
  who I am, if you are looking for projects or work please use the menu above to
  find my Resume or Github.
  </Paragraph>

  <Paragraph>
  My name is Joey Williams. I work in the field of software development with a focus
  on front end web development. My experience programming and design began when
  I was about 12, working with lua scripting as well as building static sites for fun.
  Growing up in small town Kentucky, there wasn't a ton of opportunity for learning
  how to program or design unless you had the desire to teach yourself.
  I always had viewed it as a hobby, and enjoyed math and physics more, so I began
  my college career as a Mechanical Engineer at University of Kentucky. I left most
  of my programming behind and focused entirely on developing my skills as an engineer
  until the end of my third year. There was a required course for MATLab, and working
  in MATLab sparked my desire for development again. The following semester, I switched
  my major to Computer Science, found
  <Link href='https://awesomeinc.org' target="_blank">Awesome Inc </Link>
  who was willing to hire me to build static sites
  (via jekyll, WordPress, Shopify, and raw html/css/js) as well as some web apps
  (via EmberJs, ExpressJs). Working in those languages, while also learning
  Java, C, and SQL in school taught me that an expert level of knowledge with a
  language is helpful, but not nearly as much as having a solid approach to solving
  problems. This helped greatly in my transition to my development positions post college.
  </Paragraph>

  <Paragraph>
  Upon graduating I had received an offer to work for the Kentucky Transportation Department (KYTC)
  as a full-stack web developer, in a Microsoft stack (SqlServer, C#/.NET, JQuery, Bootstrap).
  Being at KYTC was my first experience working
  with large code bases that I didn't write, and having to make changes to that code
  that didn't break the application. This quickly brought about the lesson of writing code
  that scales. The more I could refactor and reuse code, and the more it could be
  decoupled (within reason) the easier changes down the road became. The value of spending
  the extra time up front desigining, reworking, and implementing these designs massively
  cut down on the time it took to fix bugs, as well as extend the application. Since we worked
  with JQuery, design patterns were left more or less up to developer writing the application.
  I enjoyed the flexibility to experiment, and it helped when I moved into modern (NodeJs) front end tooling
  and frameworks. Today I am seeking work as a React Developer, or as a Phoenix/Elixir developer, ideally both.
  </Paragraph>

  <Paragraph>
  Outside of work I enjoy traveling, learning about other cultures, kayaking, and music. I believe new experiences
  are the key to growth, and exploration/experimentation is the only way to have those new experiences. If you would like
  to know more please feel free to reach out or continue browsing the site. Thank you and enjoy!
  </Paragraph>
  </Article>


  </Layout>
)

export default Index;