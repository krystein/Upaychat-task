import React from "react";
import './card.css';

const Card = ({ card }) => {
  return (
    <div className="col-xlg col-lg col-md col-sm">
      <div className="card-columns">
        <div className="card">
          <div className="card-body">
            <h4>UpayChat {card.type}</h4>
            <hr/>
            <p>{card.description}</p>
            <hr/>
            <p>Benefits:</p>
            <ul>
              <li>{card.benefits1}</li>
              <li>{card.benefits2}</li>
              <li>{card.benefits3}</li>
              <li>{card.benefits4}</li>
            </ul>
            <hr/>
            <p>Features:</p>
            <ul>
              <li>{card.features1}</li>
              <li>{card.features2}</li>
              <li>{card.features3}</li>
            </ul>
            <hr/>
            <a href={card.applyLink} className="btn btn-success">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
