import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterSwitch from '../Router/Router';
import { ShoppingBagContextProvider } from '../../context/shoppingBag-context';

import "./Home.scss"

function Home() {
  return (
    <div className="App">
      <ShoppingBagContextProvider>
      <Router>
        <NavBar />
         <div className="app-container">
           <RouterSwitch />
         </div>
      </Router>
      </ShoppingBagContextProvider>
    </div>
  );
}

export default Home;
