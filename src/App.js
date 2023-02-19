import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import { Routes, Route } from 'react-router-dom';
import Logo from "../src/assets/logo.svg";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SkillsDirectoryPage from "./pages/SkillsDirectoryPage";
import SkillsPage from "./pages/SkillsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from './pages/AboutPage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="layer">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
