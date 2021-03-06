import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../components/products/Products";
import Landing from "../components/Landing";
import About from "../components/about/About";
import Cart from "../components/cart/Cart";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
