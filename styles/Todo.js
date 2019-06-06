import styled from 'styled-components';
import theme from './theme';


const Todo = styled.span`
  &::before{
    content: "TODO";
    font-family: ${theme.font};
    font-size: 32px;
    color:red;
  }
`;

export default Todo;