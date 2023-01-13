import React from "react";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function List({
  ingredient,
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
      className="ingredient-card"
      onClick={(e) => receiveClickedOnIngredient(ingredient.name)}
    >
      <div className="image-container">
        <img
          className="ingredient-image"
          src={ingredient.image_url}
          alt={ingredient.name}
        />
      </div>
      <h4>
        <h4 className="ingredient-name">{ingredient.name}</h4>
        {/* <button onClick={() => handleDelete(ingredient.id)}>Remove From List</button> */}
      </h4>
    </div>
  );
}

export default List;
