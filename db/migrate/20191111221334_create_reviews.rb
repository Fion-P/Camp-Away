class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :camp_id, null: false
      t.string :body, null: false
      t.integer :helpful_count, default: 0

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :camp_id
  end
end
