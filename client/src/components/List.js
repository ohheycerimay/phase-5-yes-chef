import React from 'react';

function List({ingredient}) {
    return (
        <div className="ingredient-image">
            {ingredient.name}
            {ingredient.image}
        </div>
    );
}

export default List;