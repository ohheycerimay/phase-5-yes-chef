import React from 'react';

function MenuItem({item}) {

    console.log(item)

    return (
        <div className="stock-image">
            <img src={item.ingredient.image_url}/>
        </div>
    );
}

export default MenuItem;