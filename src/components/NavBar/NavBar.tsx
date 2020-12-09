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
        <ul className="header-menu">
          <li>
            <Link to="/products">
              <label> Products </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Cart </label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
