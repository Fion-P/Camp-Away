class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :camp_id, null: false
      t.integer :user_id, null: false
      t.integer :num_guests, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false

      t.timestamps
    end

    add_index :bookings, :camp_id
    add_index :bookings, :user_id
  end
end
