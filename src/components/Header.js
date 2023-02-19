import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Collapse, NavbarToggler, Nav, NavItem, Row } from 'reactstrap';
import Logo from '../assets/logo.svg';
import NavbarBanner from "../img/images";
import '../css/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={Logo} alt="logo" className="float-start" />
      </NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/skills">
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
