# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
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
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :first_name, :last_name, presence: true

    has_many :listings,
        class_name: :Listing,
        foreign_key: :host_id

    has_many :reviews,
        foreign_key: :user_id,
        class_name: :Review
    
    has_many :reservations,
        foreign_key: :guest_id,
        class_name: :Reservation

    attr_reader :password

    after_initialize :ensure_session_token


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user if user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
