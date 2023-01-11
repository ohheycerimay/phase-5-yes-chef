class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :category
end
