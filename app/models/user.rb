class User < ApplicationRecord
    has_many :stocks
    has_many :ingredients, through: :stocks

    validates :username, presence: true, uniqueness: true
    has_secure_password 
end
