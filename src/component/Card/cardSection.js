import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import styled from "styled-components";

const Cardsection = styled.section`

`;

const CardSection = ({ cards }) => {
  return (
    <Cardsection>
      <div className="container mt-5">
        <h1>Card Products</h1>
        <hr />
        <div className="row">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </Cardsection>
  );
};

export default CardSection;
