import React, { useEffect, useState } from "react";
import RecipeList from "./components/RecipeList";

import "./styles.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "de0b53f1";
  const APP_KEY = "ed79059a4f5878928572c517b1e5fcac";
  const API_REQUEST = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    const response = await fetch(API_REQUEST);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const onChangeHandler = (event) => {
    setSearchData(event.target.value);
    console.log(searchData);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setQuery(searchData);
    console.log(searchData);
  };

  return (
    <div className="App">
      <form className="search-bar" onSubmit={onSubmitHandler}>
        <input
          value={searchData}
          onChange={onChangeHandler}
          type="search"
          className="search-input"
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <br />
      <div className="recipes-container">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
