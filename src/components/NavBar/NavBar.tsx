import React from 'react';
import {
  Link
} from "react-router-dom";
import BagIcon from './BagSvg/BagSVG';
import "./NavBar.scss"
import SearchSVG from './Search-svg/SearchSvg';

interface Props {
  countOfItem: number
}

function NavBar({countOfItem}: Props) {
  return (
    <div className="header sticky">
      <div className="logo"> logo </div>
      <div className="menu-wrapp">
        <ul className="header-menu">
          <li>
            <Link to="/products">
              <label> New Releases </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Men </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Women </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Kids </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Gifts </label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <label> Sales </label>
            </Link>
          </li>
        </ul>
        <div className="pre-search-container">
          <Link to="/bag">
            <BagIcon countOfItem={countOfItem} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
