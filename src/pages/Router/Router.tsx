import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Bag from "../Bag/Bag";
import ProductList from "../ProductList/ProductList";

export default function RouterSwitch() {
  return (
    <Switch>
      <Route path="/products">
        <ProductList />
      </Route>
      <Route path="/bag">
        <Bag />
      </Route>
    </Switch>
  );
}
