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
# json.extract! @user, :bookings