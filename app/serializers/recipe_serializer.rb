class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :ingredients_with_details
  # has_many :recipe_ingredients
 
  
  def ingredients_with_details
    map_result = self.object.recipe_ingredients.map do |r_i|
      {id: r_i.id,
      recipe_id: r_i.recipe_id,
      ingredient: r_i.ingredient,
      amount_needed: r_i.amount_needed
    }

    end
    
  return  map_result
  end

end
