class Massaage < ApplicationRecord
  has_many :user_group
  belongs_to :user
  belongs_to :group
end