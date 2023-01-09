class Ingredient < ApplicationRecord
    has_many :stock
    has_many :users, through: :stock

    validates :name, presence: true
end
