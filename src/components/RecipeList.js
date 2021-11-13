import React from "react";
import Card from "./Card/Card";

const RecipeList = (props) => {
  console.log(props.recipes);
  return props.recipes.map((recipe) => {
    console.log(recipe);
    return (
      <div key={recipe.image}>
        <Card
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
        />
      </div>
    );
  });
};

export default RecipeList;
