import React from "react";
import Card from "./Card";

const Cards = ({ character }) => {
//   console.log(character);
  const {results , info} = character
//   console.log(results);
  return (
    <div className="y">
      {results?.map((card, index) => {
        return (
          <div key={index} >
            <Card card={card} info = {info}/>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
