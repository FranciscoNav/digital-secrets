class User < ApplicationRecord
    validates :username, presence: :true
    validates :username, uniqueness: { case_sensitive: true }
    
    has_secure_password
    
    has_many :posts
end
