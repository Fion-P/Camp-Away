
  json.extract! user, :id, :username, :email, :first_name, :last_name, :created_at
  json.bookingIds user.bookings.pluck(:id)

  


