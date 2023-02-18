import React, { useEffect, useState } from "react";
import List from "./List";
import MenuItem from "./MenuItem";
import RecipeDetail from "./RecipeDetail";

function ListContainer({
  ingredients,
  handleDeleteIngredient,
  search,
  setSearch,
  searchRecipes,
  setSearchRecipes,
  recipes,
}) {
  const [stocks, setStocks] = useState([]);
  const [menus, setMenus] = useState([]);
  // const [recipeWithIngredients, setRecipeWithIngredients] = useState({name:"Choose A Recipe", ingredients_with_details:[]})

  useEffect(() => {
    fetch("/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  const receiveClickedOnIngredient = (nameOfIngredient) => {
    console.log(stocks);
    let resultOfFind = stocks.find((eachStock) => {
      if (eachStock && eachStock.ingredient) {
        if (nameOfIngredient == eachStock.ingredient.name) return eachStock;
      }
    });
    console.log(resultOfFind);

    setMenus([...menus, resultOfFind]);
  };

  function handleRecipeSearch(e) {
    e.preventDefault();
    setSearchRecipes(e.target.value);
  }

  function handleRecipeSubmit() {
    setSearchRecipes("");
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  console.log({ menus });
  function handleSubmit() {
    setSearch("");
  }

  return (
    <div className="box-box">
      <RecipeDetail recipes={recipes} />

      <div className="stock-box">
        <div className="search-container">
          <input
            className="search-bar-1"
            type="text"
            placeholder="search recipes"
            value={searchRecipes}
            onChange={handleRecipeSearch}
          />

          <button
            onSubmit={handleRecipeSubmit}
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </div>
        <div className="ingredients-box-1">
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} setStocks={setStocks} />
          ))}
        </div>
      </div>
      <div className="big-ingredients-box">
        <div className="search-container">
          <input
            className="search-bar-2"
            type="text"
            placeholder="search ingredients"
            value={search}
            onChange={handleSearch}
          />
          <button onSubmit={handleSubmit} type="submit" className="search-btn">
            Search
          </button>
        </div>

        <div className="ingredients-box">
          {ingredients.map((ingredient) => (
            <List
              selected={menus.some(
                (item) => item.ingredient.id === ingredient.id
              )}
              key={ingredient.id}
              ingredient={ingredient}
              handleDeleteIngredient={handleDeleteIngredient}
              receiveClickedOnIngredient={receiveClickedOnIngredient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListContainer;
