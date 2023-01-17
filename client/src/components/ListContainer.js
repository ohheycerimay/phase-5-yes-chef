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
  console.log({menus})
  function handleSubmit() {
    setSearch('');
  }

  return (
    <div className="box-box">
      <div className="stock-box">
        <h3>Stock List</h3>
        <div className="ingredients-box-1">
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} setStocks={setStocks} />
          ))}
        </div>
      </div>
      <div className="big-ingredients-box">
        <div className="container-header">
          <h3>Ingredients</h3>
        <div className="search-container">

          <input className="search-bar" type="text" placeholder="search..." value={search} onChange={handleSearch}/>
      <button onSubmit={handleSubmit} type="submit" className='search-btn'>Search Ingredients</button>
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
