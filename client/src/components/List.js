import React from "react";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function List({
  ingredient,
  selected,
  handleDeleteIngredient,
  receiveClickedOnIngredient,
}) {
  function handleDelete(id) {
    handleDeleteIngredient(id);
    fetch(`/ingredients/${id}`, {
      method: "DELETE",
      headers,
    });
  }

  

  return (
    <div
    className={selected ? 'ingredient-card selected' : 'ingredient-card'}
    
    >
      <div className="image-container"  onClick={(e) => receiveClickedOnIngredient(ingredient.name)} >

        <img
          className="ingredient-image"
          src={ingredient.image_url}
          alt={ingredient.name}
        />
      </div>
      <h4>
        <h4 className="ingredient-name">{ingredient.name}</h4>
        <button className="button-57" onClick={() => handleDelete(ingredient.id)}>𝟠𝟞</button>
      </h4>
    </div>
  );
}

export default List;
