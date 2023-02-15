import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Logo from "../src/assets/logo.svg";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="layer">
        <Navbar light sticky="top" expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={Logo} alt="logo" />
            </NavbarBrand>
          </Container>
        </Navbar>
        <Header />
        <HomePage />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
