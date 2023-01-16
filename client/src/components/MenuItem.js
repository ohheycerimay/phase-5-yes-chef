import React from "react";

function MenuItem({ item }) {
  console.log(item.ingredient);

//   function updateStockAmount(ingredient) {
//     fetch(`/ins/${ingredient.id}`, {
//     method: "PATCH",
//     headers,
//     body: JSON.stringify({ likes: ++ingredient.amount }),
//     }).then((r) => r.json())
//     .then((freshPost) => {
//         const newMenuArray = experie.posts.map((p) => p.id !== freshPost.id ? p : freshPost);
//         setExperience({ ...experience, posts: newPostArray });
//     });
// }

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
