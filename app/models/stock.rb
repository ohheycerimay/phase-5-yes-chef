class Stock < ApplicationRecord
    belongs_to: :ingredients
    belongs_to: :users
    
end
