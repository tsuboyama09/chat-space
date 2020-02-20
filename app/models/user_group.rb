class UserGroup < ApplicationRecord
  has_many :messages
  belongs_to :user
  belongs_to :group
end