import React from 'react';
import List from './List';



function ListContainer({ingredients, handleDeleteIngredient}) {
    return (
        <div>
          
            {
            ingredients.map(ingredient => <List key= {ingredient.id} ingredient= {ingredient} handleDeleteIngredient={handleDeleteIngredient}/>)
            }
        </div>
    );
}

export default ListContainer;

