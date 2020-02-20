# chat-space DB設計
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|emall|string|null: false|
### Association
- has_many :groups, though: :users_groups
- has_many :users_groups
- has_many :messaages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, though: :users_groups
- has_many :users_groups
- has_many :messages

## mwssagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
