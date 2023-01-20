import React, { useEffect, useState } from "react";
import List from "./List";
import MenuItem from "./MenuItem";
import RecipeContainer from "./RecipeContainer";
import RecipeIngredientItem from "./RecipeIngredientItem";

function ListContainer({ ingredients, handleDeleteIngredient, search, setSearch, searchRecipes, setSearchRecipes, recipes }) {
  const [stocks, setStocks] = useState([]);
  const [menus, setMenus] = useState([]);
  const [recipeWithIngredients, setRecipeWithIngredients] = useState({name:"Choose A Recipe", ingredients_with_details:[]})
  console.log(recipeWithIngredients)

  useEffect(() => {
    fetch("/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);



  const receiveClickedOnIngredient = (nameOfIngredient) => {
    console.log(nameOfIngredient);
    let resultOfFind = stocks.find((eachStock) => {
      // console.log(eachStock.ingredient.name)
      if (nameOfIngredient == eachStock.ingredient.name) return eachStock;
    });
    console.log(resultOfFind);
    //if resultOfFind is null - this will break!
    setMenus([...menus, resultOfFind]);
  };

    function handleRecipeSearch(e) {
    e.preventDefault() 
    setSearchRecipes(e.target.value)
  }
 
  function handleRecipeSubmit() {
    setSearchRecipes('');
  }

  function handleSearch(e) {
    e.preventDefault() 
    setSearch(e.target.value)
  }
  console.log({menus})
  function handleSubmit() {
    setSearch('');
  }

  return (
    <div className="box-box">
      <RecipeContainer setRecipeWithIngredients={setRecipeWithIngredients} recipes={recipes}/>
      <div className="stock-box">
        {/* <h3>Stock List</h3> */}
        <input className="search-bar" type="text" placeholder="search recipes" value={searchRecipes} onChange={handleRecipeSearch}/>
            <button onSubmit={handleRecipeSubmit} type="submit" className='search-btn'>Search</button>
        <div className="ingredients-box-1">
        
        <div className="search-container">
         <div>
            <h2>
              {recipeWithIngredients.name}
            </h2>
          {
            recipeWithIngredients.ingredients_with_details.map((recipeIngredient) => <RecipeIngredientItem key={recipeIngredient.id} ingredientWithAmount={recipeIngredient}/>)
          }
         </div>
          </div>
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} setStocks={setStocks} />
          ))}
        </div>
      </div>
      <div className="big-ingredients-box">
        <div className="container-header">
          {/* <h3>Ingredients</h3> */}
        <div className="search-container">

          <input className="search-bar" type="text" placeholder="search ingredients" value={search} onChange={handleSearch}/>
      <button onSubmit={handleSubmit} type="submit" className='search-btn'>Search</button>
        </div>
        </div>
        <div className="ingredients-box">
          {ingredients.map((ingredient) => (
            <List
              selected={menus.some(item => (item.ingredient.id === ingredient.id))}
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
