import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Logo from '../src/assets/logo.svg';
import Header from '../src/components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar light color="primary" sticky="top" expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={Logo} alt='logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
}

export default App;
