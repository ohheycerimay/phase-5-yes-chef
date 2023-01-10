import React from 'react';
import List from './List';



function ListContainer({ingredients}) {
    return (
        <div>
          
            {
            ingredients.map(ingredient => <List key= {ingredient.id} ingredient= {ingredient} />)
            }
        </div>
    );
}

export default ListContainer;