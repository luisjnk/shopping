import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterSwitch from '../Router/Router';

function Home() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <RouterSwitch />
      </Router>
    </div>
  );
}

export default Home;
