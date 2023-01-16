import React from "react";

function MenuItem({ item }) {
  console.log(item.ingredient);

  return (
    <div className="stock-card">
      {/* <img className="stock-image" src={item.ingredient.image_url} /> */}
      <h4>{item.ingredient.name}</h4>
      <div>
        <span className="label">Amount: </span><span>{item.amount}</span>
        <span className="label">All day amount: </span><span>{item.all_day_amount}</span>
      </div>
    </div>
  );
}

export default MenuItem;
