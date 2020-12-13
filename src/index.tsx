import React from 'react';
import ReactDOM from 'react-dom';
import { ShoppingBagContextProvider } from './context/shoppingBag-context';
import Home from './pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <ShoppingBagContextProvider>
      <Home />
    </ShoppingBagContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
