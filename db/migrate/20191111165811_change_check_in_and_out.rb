class ChangeCheckInAndOut < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :check_out
    remove_column :bookings, :check_in
    add_column :bookings, :check_out, :string, null: false 
    add_column :bookings, :check_in, :string, null: false 
  end
end
