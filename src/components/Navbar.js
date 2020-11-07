import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "./Context";
import { CartAmountContext } from "./CartAmountContext";

const Navbar = () => {
  //get value from cart context
  const value = useContext(CartContext);
  const cart = value[0];
  //get cart number from context
  const [cartNum, setCartNum] = useContext(CartAmountContext);

  return (
    <div className="Navbar">
      <Link to="/">Home </Link>
      <Link to="/cart">Cart ({cartNum}) </Link>
    </div>
  );
};

export default Navbar;
