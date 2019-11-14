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

class Camp < ApplicationRecord
  validates :camp_name, presence: true, uniqueness: true

  validates :host_id, :location, :longitude , :latitude, :max_guests, 
            :availability, :description , :minimum_nights, :price , 
            :checkin_time, :checkout_time , :elevation , :terrain , 
            :weather, :lodging_type, presence: true

  validates :bins, :kitchen, :wifi, :portable_water, :picnic_tables, :showers, :toilet, :campfires, 
            :pets, inclusion: { in: [ true, false ] }

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :bookings, 
    foreign_key: :camp_id, 
    class_name: :Booking

  has_many :reviews, 
    foreign_key: :camp_id,
    class_name: :Review

  has_many_attached :photos
  # has_one_attached :photo

end
