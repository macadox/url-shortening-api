import React from "react";

const Burger = ({toggleNav}) => {
  return (
    <button className='burger' onClick={toggleNav}>
      <div className='burger__bar'></div>
    </button>
  );
};

export default Burger;
