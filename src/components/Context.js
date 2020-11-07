import React, { useState, createContext } from "react";
import Cart from "./Cart";
import Store from "./Store";
import Item from "./Item";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  //set cart context
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
