import React, { useState } from "react";
import { Link } from "react-router-dom";

function OrderForm({ user, ingredients, setIngredients }) {
  const [showForm, setShowForm] = useState(false);

  let initialFormState = {
    name: "",
    image_url: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/ingredients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(initialFormState);
        setIngredients([data, ...ingredients]);
        setShowForm(!showForm);
      });
  };
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Link className="ingredients-link" to="/ingredients">
        Go Back
      </Link>
      <div className="form-group">
        <form id="form" onSubmit={handleSubmit}>
          <input
            className="input_field"
            value={formData.name}
            placeholder="Ingredient"
            name="name"
            type="text"
            onChange={handleChange}
          />
          <input
            className="input_field"
            value={formData.image_url}
            placeholder="Image Url"
            name="image_url"
            type="text"
            onChange={handleChange}
          />
          <input
            className="input_field"
            value={formData.category}
            placeholder="Category"
            name="category"
            type="text"
            onChange={handleChange}
          />
          <button className="create-button" id="create-experience-button">
            Create Ingredient
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
