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

class Review < ApplicationRecord
  validates :camp_id, :user_id, :body, presence: true

  belongs_to :author, 
    foreign_key: :user_id,
    class_name: :User

  belongs_to :camp,
    foreign_key: :camp_id,
    class_name: :Camp
end
