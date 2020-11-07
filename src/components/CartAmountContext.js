import React, { useState, createContext } from "react";
import Cart from "./Cart";
import Store from "./Store";
import Item from "./Item";

export const CartAmountContext = React.createContext();

export const CartAmountProvider = (props) => {
  //set cart number
  const [cartNum, setCartNum] = useState(0);
  return (
    <CartAmountContext.Provider value={[cartNum, setCartNum]}>
      {props.children}
    </CartAmountContext.Provider>
  );
};
