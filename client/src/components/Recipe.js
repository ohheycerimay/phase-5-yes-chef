import React from 'react';

function Recipe({recipe, setRecipeWithIngredients}) {
    return (
        <div className="recipe-menu" onClick={(e) => setRecipeWithIngredients(recipe)}>
           <h2>{recipe.name}</h2> 
        </div>
    );
}

export default Recipe;