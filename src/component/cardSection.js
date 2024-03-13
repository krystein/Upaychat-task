import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './card';

const CardSection = ({ cards }) => {
  return (
    <div className='container'>
        <h1 className='text-center'>Card Products</h1>
    <div className="row">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
    </div>
  );
};

export default CardSection;
