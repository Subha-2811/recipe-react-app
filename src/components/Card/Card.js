import "./card.css";
import React from "react";

const Card = ({ title, image, calories, ingredients }) => {
  console.log(`${title} ${image}`);
  return (
    <div className="card" key={title}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="primary-heading">{title}</h3>
        <p className="calories">
          <i className="fas fa-fire u-margin-right"></i>
          {Math.round(calories * 100) / 100} Cal.
        </p>
        {/* <ul>{ingredients()}</ul> */}
        <ul className="ingredient-list">
          {ingredients.map((ingredient) => {
            return (
              <li className="ingredient-text" key={ingredient.food}>
                {ingredient.text} - ({ingredient.food})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
