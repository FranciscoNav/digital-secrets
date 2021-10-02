class User < ApplicationRecord
    validates :username, presence: :true
    validates :username, uniqueness: { case_sensitive: true }
    validates :password_confirmation, presence: :true
    
    has_secure_password
    
    has_many :posts
end
