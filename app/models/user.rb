class User < ApplicationRecord
    has_many :stock
    has_many :ingredients, through: :stock

    validates :username, presence: true, uniqueness: true
    has_secure_password 
end
