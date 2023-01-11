import React from 'react';

function List({ingredient}) {

  

    return (
        <div>
        <div className="ingredient-card">
          <img className="ingredient-image" src= {ingredient.image_url} alt={ingredient.name}/>
        </div>
        <h3>
        <h3 className="ingredient-name">{ingredient.name}</h3> 
        </h3>
        </div>
    );
}

export default List;