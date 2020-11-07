import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { CartProvider } from "./components/Context";
import { CartAmountProvider } from "./components/CartAmountContext";

function App() {
  return (
    <CartProvider>
      <CartAmountProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={Store} exact />
            <Route path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
        </div>
      </CartAmountProvider>
    </CartProvider>
  );
}

export default App;
