import React, {useEffect, useState} from 'react';
import List from './List';
import MenuItem from './MenuItem';


function ListContainer({ingredients, handleDeleteIngredient}) {

    const [stocks, setStocks] = useState([])
    const [menus, setMenus] = useState([])
    console.log(menus)

    useEffect(() => {
        fetch("/stocks")
        .then(r => r.json())
        .then((data) => setStocks(data))
    }, [])

    const receiveClickedOnIngredient = (nameOfIngredient) => {
        console.log(nameOfIngredient)
        let resultOfFind = stocks.find((eachStock) => {
            // console.log(eachStock.ingredient.name)
            if (nameOfIngredient == eachStock.ingredient.name)
            return eachStock
        })
        console.log(resultOfFind)
        //if resultOfFind is null - this will break!

        setMenus( [ ...menus , resultOfFind])
    }

    return (
        <div className="box-box">
            <div className="stock-box">
                <h3>Hi! I'm the stock list! 🥰</h3>
            <div className="ingredients-box-1">
           {
            menus.map(item => <MenuItem key= {item.id} item= {item} />)
           }
           </div>
            </div>
            <div>
                <h3>Hi! I'm where the filter goes! 🥰</h3>
            <div className="ingredients-box">
                {
                ingredients.map(ingredient => <List key= {ingredient.id} ingredient= {ingredient} handleDeleteIngredient={handleDeleteIngredient} receiveClickedOnIngredient={receiveClickedOnIngredient}/>)
                }
            </div>
            </div>
            </div>
    );
}

export default ListContainer;

