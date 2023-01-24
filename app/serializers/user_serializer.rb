class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :profile_pic
  has_many :ingredients
end
