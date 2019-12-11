json.user do 
  json.partial! "api/users/user", user: @user
end

json.bookings do 
  @user.bookings.each do |booking|
      json.set! booking.id do
        json.partial! "api/bookings/booking", booking: booking
      end
  end
end


json.camps do 
  @user.booked_camps.each do |camp|
      # json.extract! camp, :id, :camp_name
      json.set! camp.id do 
        json.partial! "api/camps/camp", camp: camp
      end
  end
end
# json.extract! @user, :bookings