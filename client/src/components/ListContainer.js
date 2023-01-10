import React from 'react';
import List from './List';
import {Link} from 'react-router-dom'


function ListContainer({ingredients}) {
    return (
        <div>
          <Link className="logout-button" to="/logout">Logout</Link>
            {
            ingredients.map(ingredient => <List key= {ingredient.id} ingredient= {ingredient} />)
            }
        </div>
    );
}

export default ListContainer;