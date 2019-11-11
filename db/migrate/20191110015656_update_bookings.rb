class UpdateBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :_check_out
    add_column :bookings, :check_out, :integer, null: false 
  end
end
