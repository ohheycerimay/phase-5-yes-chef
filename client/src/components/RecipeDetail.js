import React, {useState} from 'react';
import RecipeIngredientItem from './RecipeIngredientItem';
import RecipeContainer from './RecipeContainer'

function RecipeDetail({recipes}) {

    const [recipeWithIngredients, setRecipeWithIngredients] = useState({name:"Choose A Recipe", ingredients_with_details:[]})

    return (
        <div className="recipe-container">
            <RecipeContainer setRecipeWithIngredients={setRecipeWithIngredients} recipes={recipes}/>
            <div>
         <div className="recipe-div">
            <h2>
              {recipeWithIngredients.name}
            </h2>
          {
            recipeWithIngredients.ingredients_with_details.map((recipeIngredient) => <RecipeIngredientItem key={recipeIngredient.id} ingredientWithAmount={recipeIngredient}/>)
          }
         </div>
          </div>
        </div>
    );
}

export default RecipeDetail;