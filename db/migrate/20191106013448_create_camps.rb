class CreateCamps < ActiveRecord::Migration[5.2]
  def change
    create_table :camps do |t|
      t.string :camp_name, null: false
      t.integer :host_id, null: false
      t.string :location, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :max_guests, null: false
      t.boolean :availability, null: false
      t.text :description, null: false
      t.integer :minimum_nights, null: false
      t.float :price, null: false
      t.string :checkin_time, null: false
      t.string :checkout_time, null: false
      t.integer :elevation, null: false
      t.string :terrain, null: false
      t.string :weather, null: false
      t.text :activities, array: true, default: []
      t.boolean :portable_water, null: false, default: false
      t.boolean :picnic_tables, null: false, default: false
      t.boolean :bins, null: false, default: false
      t.boolean :kitchen, null: false, default: false
      t.boolean :showers, null: false, default: false
      t.boolean :wifi, null: false, default: false
      t.boolean :toilet, null: false, default: false
      t.boolean :campfires, null: false, default: false
      t.boolean :pets, null: false, default: false
      t.string :lodging_type, null: false

      t.timestamps
    end
    add_index :camps, :camp_name
    add_index :camps, :host_id
  end
end
