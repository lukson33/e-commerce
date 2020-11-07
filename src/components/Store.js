import React, { useState, useContext } from "react";
import data from "../data";
import Item from "./Item";
import Navbar from "./Navbar";
import Cart from "./Cart";

const Store = () => {
  //set shopping items
  const [items, setItems] = useState(data);

  const sortItemsLow = () => {
    //sort items in array
    const updated = items.sort((a, b) => a.price - b.price);
    //update array
    setItems([...updated]);
  };

  const sortItemsHigh = () => {
    //sort items in array
    const updated = items.sort((a, b) => b.price - a.price);
    //update array
    setItems([...updated]);
  };
  return (
    <div>
      <Navbar />
      <h1>E-Commerce App</h1>
      <button onClick={sortItemsLow}>Price low to high</button>
      <button onClick={sortItemsHigh}>Price high to low</button>
      <div className="store-container">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Store;
