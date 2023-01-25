import React, {useState} from "react";

const headers = {
  Accept: "application/json",
      "Content-Type" : "application/json"}

function MenuItem({ item, setStocks }) {
  console.log(item.ingredient);

  const [menuItemData, setMenuItemData] = useState(item)

  function updateMenuItem() {
      fetch(`stocks/${item.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ amount: ++item.amount}),
      }).then((r) => {
        if (r.ok ) {
          r.json().then((data)=>{
            setMenuItemData(data)
          })
        } else {
          console.warn("something bad happened")
        }
        
      })

     
  }

  return (
    <div className="stock-card">
      {/* <img className="stock-image" src={item.ingredient.image_url} /> */}
      <h4>{item.ingredient.name}</h4>
      <div>
        <span className="label">Amount: </span><span>{item.amount}</span>
        <span className="label">Amount In Stock: </span><span>{item.all_day_amount - item.amount}</span>
        <button className='stat-button' onClick={()=>updateMenuItem(item)}>Add To List</button>
      </div>
    </div>
  );
}

export default MenuItem;
