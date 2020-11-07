import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import Item from "./Item";
import { CartContext } from "./Context";
import { CartAmountContext } from "./CartAmountContext";

const Cart = () => {
  //use cart context
  const [cart, setCart] = useContext(CartContext);
  //use cart number context
  const [cartNum, setCartNum] = useContext(CartAmountContext);
  const handleClear = () => {
    setCart([]);
    setCartNum(0);
  };
  return (
    <div>
      <Navbar />
      <button onClick={handleClear}>Clear Cart</button>
      <div className="store-container">
        {cart.map((item) => (
          <Item item={item} key={item.id} cartBtn={true} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
