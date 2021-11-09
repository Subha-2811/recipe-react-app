import React from "react";
import Card from "./Card/Card";

const RecipeList = (props) => {
  console.log(props.recipes);
  return props.recipes.map((recipe) => {
    return (
      <div>
        <Card
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredientList={recipe.recipe.ingredientLines}
        />
      </div>
    );
  });
};

export default RecipeList;
