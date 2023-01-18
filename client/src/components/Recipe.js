import React from 'react';

function Recipe({recipe}) {
    return (
        <div>
           <h2>{recipe.name}</h2> 
        </div>
    );
}

export default Recipe;