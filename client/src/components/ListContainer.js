import React from 'react';
import List from './List';



function BigContainer({ingredients, handleDeleteIngredient}) {
    return (
        <div className="box-box">
            <div className="ingredients-box"></div>
            <div className="ingredients-box">
                {
                ingredients.map(ingredient => <List key= {ingredient.id} ingredient= {ingredient} handleDeleteIngredient={handleDeleteIngredient}/>)
                }
            </div>
        </div>

    );
}

export default BigContainer;

