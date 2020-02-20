# chat-space DB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|emall|string|null: false|
### Association
- has_many :groups, though: :user_group
- has_many :messaages
- has_many :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false|
### Association
- has_many  :users, though: :user_groups
- has_many :messages

## mwssagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :user_group
- belongs_to :user
- belongs_to :group

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- belongs_to :user
- belongs_to :group
