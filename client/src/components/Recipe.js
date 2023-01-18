import React from 'react';

function Recipe({recipe}) {
    return (
        <div className="recipe-menu">
           <h2>{recipe.name}</h2> 
        </div>
    );
}

export default Recipe;