# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  camp_id    :integer          not null
#  user_id    :integer          not null
#  num_guests :integer          not null
#  check_in   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  check_out  :date             not null
#

class Booking < ApplicationRecord
  validates :camp_id, :user_id, :num_guests, :check_in, :check_out, presence: true

  belongs_to :camp,
    foreign_key: :camp_id, 
    class_name: :Camp

  belongs_to :user, 
    foreign_key: :user_id,
    class_name: :User
end
