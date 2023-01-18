import React from 'react';
import Recipe from './Recipe' 

function RecipeContainer({recipes}) {

   console.log(recipes)

    return (
        <div>
            {
            recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe}/>)   
            }
        </div>
    );
}

export default RecipeContainer;