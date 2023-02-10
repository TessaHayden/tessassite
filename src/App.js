import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Logo from "../src/assets/logo.svg";
import Header from "../src/components/Header";
import HomeCard from "../src/features/home/HomeCard";
import { MEE } from "../src/shared/MEE";
import Footer from "./components/Footer";
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
        <HomeCard mee={MEE[0]} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
