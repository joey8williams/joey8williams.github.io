import styled from 'styled-components';
import theme from '../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position:absolute;
  right:0px;
  top:50%;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-size: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;

`;

const Contact = () => (
  <Wrapper>
    <FontAwesomeIcon icon={faUser} />
  </Wrapper>
);


export default Contact;