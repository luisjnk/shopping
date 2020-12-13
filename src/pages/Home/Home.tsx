import React, { useContext, useEffect, useState }  from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterSwitch from '../Router/Router';
import ShoppingContext, { ShoppingBagContextProvider } from '../../context/shoppingBag-context';

import "./Home.scss"

function Home() {

  const shoppingContext = useContext(ShoppingContext)
  const { productListLength } = shoppingContext
  console.log("productListLength home component", productListLength)

  const [countOfProducts, setCountOfProducts] = useState(productListLength)

  useEffect(() => {
    console.log("deveria aqui")
    setCountOfProducts(productListLength)
  }, [productListLength])

  
  return (
    <div className="App">
      <Router>
        <NavBar countOfItem={countOfProducts} />
         <div className="app-container">
           <RouterSwitch />
         </div>
      </Router>
    </div>
  );
}

export default Home;
