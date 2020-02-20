class User < ApplicationRecord
  has_many :groups, though: :user_group
  has_many :messaages
  has_many :group
end