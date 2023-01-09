class StockSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :ingredient_id, :amount, :all_day_amount, :all_day
end
