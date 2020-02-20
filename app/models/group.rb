class Group < ApplicationRecord
  has_many  :users, though: :user_groups
  has_many :messages
end
