# == Schema Information
#
# Table name: camps
#
#  id             :integer          not null, primary key
#  camp_name      :string           not null
#  host_id        :integer          not null
#  location       :string           not null
#  longitude      :float            not null
#  latitude       :float            not null
#  max_guests     :integer          not null
#  availability   :boolean          not null
#  description    :text             not null
#  minimum_nights :integer          not null
#  price          :float            not null
#  checkin_time   :string           not null
#  checkout_time  :string           not null
#  elevation      :integer          not null
#  terrain        :string           not null
#  weather        :string           not null
#  activities     :text             default("{}"), is an Array
#  portable_water :boolean          default("false"), not null
#  picnic_tables  :boolean          default("false"), not null
#  bins           :boolean          default("false"), not null
#  kitchen        :boolean          default("false"), not null
#  showers        :boolean          default("false"), not null
#  wifi           :boolean          default("false"), not null
#  toilet         :boolean          default("false"), not null
#  campfires      :boolean          default("false"), not null
#  pets           :boolean          default("false"), not null
#  lodging_type   :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class CampTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
