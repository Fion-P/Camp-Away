# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  camp_id    :integer          not null
#  user_id    :integer          not null
#  num_guests :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  check_out  :string           not null
#  check_in   :string           not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
