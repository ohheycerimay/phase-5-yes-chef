import React from "react";

function RecipeIngredientItem({ ingredientWithAmount }) {
  console.log(ingredientWithAmount);

  return (
    <div className="stock-card">
      <h4>{ingredientWithAmount.ingredient.name}</h4>
      <div>
        <span className="label">Amount Needed: </span>
        <span>{ingredientWithAmount.amount_needed}</span>
      </div>
    </div>
  );
}

export default RecipeIngredientItem;
