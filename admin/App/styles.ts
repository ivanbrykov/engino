import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.header`
  flex-grow: 100;
  width: 100%;
  border: 1px solid red;
  padding: 1em;
`;

const Sidebar = styled.section`
  border: 1px solid red;
  padding: 1em;
`;

const Main = styled.div`
  flex-grow: 100;
  border: 1px solid red;
  padding: 1em;
`;

const Footer = styled.footer`
  flex-grow: 100;
  width: 100%;
  border: 1px solid red;
  padding: 1em;  
`;

export {
  Container,
  Header,
  Sidebar,
  Main,
  Footer,
};
