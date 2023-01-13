import React from "react";

function MenuItem({ item }) {
  console.log(item);

  return (
    <div className="stock-card">
      <img className="stock-image" src={item.ingredient.image_url} />
      <h3>{item.ingredient.name}</h3>
      <h4>{item.ingredient.all_day_amount}</h4>
    </div>
  );
}

export default MenuItem;
