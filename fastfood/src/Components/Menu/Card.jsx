import React from "react";

function Card({ name, price, image }) {
  return (
    <div className="card__container">
      <div className="menuimage__container">
        <img className="menuimage" src={image} alt={name} />
      </div>
      <div className="menu-content__container">
        <h3 className="menuname">{name}</h3>
        <p className="menuprice">{price}</p>
      </div>
    </div>
  );
}

export default Card;
