import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price} = item;
  return (
    <div className="cards">
      <div className="details">
        <p>{title}</p>
        <p>Price - {price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Cards;
