# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  camp_id       :integer          not null
#  body          :string           not null
#  helpful_count :integer          default("0")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
