json.booking do 
  json.extract! @booking, 
    :id, :camp_id, :user_id, :num_guests, :check_in, :check_out
    json.camp_name @booking.camp.camp_name
    json.camp_location @booking.camp.location
end

json.extract! @booking, :camp
