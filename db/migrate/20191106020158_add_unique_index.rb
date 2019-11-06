class AddUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :camps, :camp_name
    add_index :camps, :camp_name, unique: true
  end
end
