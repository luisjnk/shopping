import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import ProductList from "../ProductList/ProductList";

export default function RouterSwitch() {
  return (
        <Switch>
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
  );
}
