import React from 'react';
import {
  Link
} from "react-router-dom";
import "./NavBar.scss"

function NavBar() {
  return (
    <div className="header">
      <div className="logo"> logo </div>
      <div className="menu-wrapp">
        <div className="header-menu">
          <Link to="/products">
             <label> Products </label>
          </Link>
          <label> Cart </label>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
