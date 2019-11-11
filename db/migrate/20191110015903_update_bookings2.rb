class UpdateBookings2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :check_out
    add_column :bookings, :check_out, :date, null: false 
  end
end
