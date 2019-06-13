import styled from 'styled-components';
import theme from './theme';

//For wrapping pages that need more of a standard webpage look
//Having this in the Layout made the landing page
//significantly more difficult.

const Body = styled.div`
  border-top: 2px solid ${theme.black};
  background-color:${theme.white};
  color:${theme.black};
  box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.61);
  padding:2%;
  height:100%;
`;

export default Body