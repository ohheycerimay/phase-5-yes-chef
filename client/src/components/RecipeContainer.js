import React from 'react';
import Recipe from './Recipe' 

function RecipeContainer({recipes, lookUpRecipe}) {

   console.log(recipes)

    return (
        <div>
            {
            recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} lookUpRecipe={lookUpRecipe}/>)   
            }
        </div>
    );
}

export default RecipeContainer;