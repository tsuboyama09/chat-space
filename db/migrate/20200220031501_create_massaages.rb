class CreateMassaages < ActiveRecord::Migration[5.0]
  def change
    create_table :massaages do |t|
      t.string :body
      t.text :image
      t.timestamps
    end
  end
end