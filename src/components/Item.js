import React from "react";
import {useState} from "react";
function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false);
  function handleCart() {
    setAddCart((prev) => !prev);
  }
  const cart = addCart ? "in-cart" : "";
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      
      <button  
          className= {addCart ? "remove" : "add"}
          onClick={handleCart}>
            {addCart ? "Remove from" : "Add to"} Cart
          </button>
    </li>
  );
}

export default Item;
