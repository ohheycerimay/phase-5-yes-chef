class StockSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :amount, :all_day_amount, :all_day
  has_one :ingredient
end
