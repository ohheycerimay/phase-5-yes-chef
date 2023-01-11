import React from 'react';

const headers = {
  Accepts: "application/json",
      "Content-Type" : "application/json"}

function List({ingredient, handleDeleteIngredient}) {

    function handleDelete(id){
      handleDeleteIngredient(id)
      fetch(`/ingredients/${id}`,{
          method: 'DELETE',
          headers,
      })
    }

    return (
        <div>
        <div className="ingredient-card">
          <img className="ingredient-image" src= {ingredient.image_url} alt={ingredient.name}/>
        </div>
        <h3>
        <h3 className="ingredient-name">{ingredient.name}</h3>
        <button onClick={() => handleDelete(ingredient.id)}>delete</button>
        </h3>
        </div>
    );
}

export default List;