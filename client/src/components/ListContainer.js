import React, { useEffect, useState } from "react";
import List from "./List";
import MenuItem from "./MenuItem";

function ListContainer({ ingredients, handleDeleteIngredient, search, setSearch }) {
  const [stocks, setStocks] = useState([]);
  const [menus, setMenus] = useState([]);
  console.log(menus);

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

  function handleSearch(e) {
    e.preventDefault() 
    setSearch(e.target.value)
  }

  function handleSubmit() {
    setSearch('');
  }

  return (
    <div className="box-box">
      <div className="stock-box">
        <h3>Stock List</h3>
        <div className="ingredients-box-1">
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="big-ingredients-box">
      <h3>Ingredients</h3>
      <input className="search-bar" type="text" placeholder="search..." value={search} onChange={handleSearch}/>
      <button onSubmit={handleSubmit} type="submit" className='search-btn'>Search Ingredients</button>
        <div className="ingredients-box">
          {ingredients.map((ingredient) => (
            <List
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
