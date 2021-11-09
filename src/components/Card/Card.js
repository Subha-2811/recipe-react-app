import "./card.css";
import React from "react";

const Card = ({ title, image, calories, ingredientList }) => {
  // const ingredients = () => {
  //   if (props.recipe.length() === 0) {
  //     return null;
  //   }
  //   return props.recipe.ingredientLines.map((i) => {
  //     return <li>{i}</li>;
  //   });
  // };
  console.log(`${title} ${image}`);
  return (
    <div className="card" key={title}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="primary-heading">{title}</h3>
        <p>{calories}</p>
        {/* <ul>{ingredients()}</ul> */}
      </div>
    </div>
  );
};

export default Card;
