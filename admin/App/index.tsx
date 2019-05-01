import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Sidebar,
  Main,
  Footer,
} from './styles';


const App = (): React.ReactElement => (
  <Container>
    <Header>
      Engino veritas
      <Link to="/settings">Settings</Link>
    </Header>
    <Sidebar>Sidebar</Sidebar>
    <Main>Main content area</Main>
    <Footer>Footer here</Footer>
  </Container>
);

export default App;
