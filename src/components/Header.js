import React from "react";
import NavbarBanner from "../img/images";
import '../css/header.css';

const Header = () => {
  return (
    <div className="header-div">
      <img
        id="navbanner"
        src={NavbarBanner.ImageBanner}
        alt="banner"
      />
    </div>
  );
};

export default Header;
