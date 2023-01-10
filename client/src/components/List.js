import React from 'react';

function List({ingredient}) {
    return (
        <div>
            <li>{ingredient.name}</li>
           <img className="ingredient-image" src= {ingredient.image_url} alt={ingredient.name}/>
        </div>
    );
}

export default List;