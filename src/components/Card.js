import React from "react";

const Card = ({ item }) => {
  return (
    <div className='card'>
      <div className='card__icon-container'>
        <img src={item.icon} alt={item.title} className='card__icon' />
      </div>
      <h3 className='card__title'>{item.title}</h3>
      <p className='card__text'>{item.text}</p>
    </div>
  );
};

export default Card;
