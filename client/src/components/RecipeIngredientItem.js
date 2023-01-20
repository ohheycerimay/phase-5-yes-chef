import React from "react";



function RecipeIngredientItem({ ingredientWithAmount }) {
 
  console.log(ingredientWithAmount)
 
  return (
    <div className="stock-card">
      <h4>{ingredientWithAmount.ingredient.name}</h4>
      <div>
        <span className="label">Amount Needed: </span><span>{ingredientWithAmount.amount_needed}</span>
      
        {/* <button className='stat-button' onClick={()=>updateMenuItem(item)}>Update</button> */}
      </div>
    </div>
  );
}

export default RecipeIngredientItem;
