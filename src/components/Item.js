import React from 'react';

const Item = ({ name, quantity }) => {
  return (
    <div className='itemStyle'>
      <h4>{name}</h4> 
      <p className={quantity === 'Out of stock' ? 'redText' : 'normalText'}>{quantity}</p>
    </div>
  );
};

export default Item;
