import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterSwitch from '../Router/Router';

import "./Home.scss"
function Home() {
  return (
    <div className="App">
      <Router>
        <NavBar />
         <div className="app-container">
           <RouterSwitch />
         </div>
      </Router>
    </div>
  );
}

export default Home;
