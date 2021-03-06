# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :camps,
    foreign_key: :host_id,
    class_name: :Camp

  has_many :bookings, 
    foreign_key: :user_id, 
    class_name: :Booking

  has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review

  has_many :booked_camps, 
    through: :bookings, 
    source: :camp

  f

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom.urlsafe_base64)
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
