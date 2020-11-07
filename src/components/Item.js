import React, { useState, useContext } from "react";
import "../App.css";
import Cart from "./Cart";
import { CartContext } from "./Context";
import { CartAmountContext } from "./CartAmountContext";

const Item = ({ item, cartBtn }) => {
  const { name, price, img, desc, id, amount } = item;
  //cart context
  const [cart, setCart] = useContext(CartContext);
  const [cartNum, setCartNum] = useContext(CartAmountContext);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    //increment amount in cart
    setCartNum((prevNum) => prevNum + 1);
    handleAdded();
    //check if cart is empty
    if (cart.length === 0) {
      //if it is, add item to cart
      setCart((prevCart) => [
        ...prevCart,
        { name, price, img, desc, id: prevCart.length + 1, amount: 1 },
      ]);
    } else {
      //if its not empty, find item and increment his amount
      const found = cart.find((item) => item.name === name);
      if (found) {
        found.amount++;
      } else {
        //if item is not found, add item to cart
        setCart((prevCart) => [
          ...prevCart,
          { name, price, img, desc, id: prevCart.length + 1, amount: 1 },
        ]);
      }
    }
  };

  const removeCart = () => {
    //decrement amount in cart
    setCartNum((prevNum) => prevNum - 1);
    //find item
    const foundItem = cart.find((item) => item.name === name);
    //find his index in cart
    const index = cart.findIndex((item) => item.name === name);
    //check if item has more then 1 amount
    if (foundItem.amount > 1) {
      //make a copy of previous cart array
      let prevCart = [...cart];
      //select the item
      let item = { ...prevCart[index] };
      //decrement amount
      item.amount--;
      //set new array
      prevCart[index] = item;
      setCart(prevCart);
    } else {
      //if its only 1, remove it from cart
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  };

  const handleAdded = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="item">
      <h2>{name}</h2>
      <p>{price}</p>
      <img className="img" src={img}></img>
      <p>{amount}</p>
      {/* check if item is in cart or on main page */}
      {cartBtn ? (
        <button onClick={removeCart}>Remove from cart</button>
      ) : (
        <button onClick={addToCart}>Add to cart</button>
      )}
      {isAdded && <p>Added to cart</p>}
    </div>
  );
};

export default Item;
