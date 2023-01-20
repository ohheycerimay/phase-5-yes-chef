import React from 'react';
import Recipe from './Recipe' 

function RecipeContainer({recipes, setRecipeWithIngredients}) {

   console.log(recipes)

    return (
        <div>
            <h3>Today's Menu</h3>
            {
            recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} setRecipeWithIngredients={setRecipeWithIngredients}/>)   
            }
        </div>
    );
}

export default RecipeContainer;