# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  listing_id :integer          not null
#  rating     :integer          not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord 
    validates :rating, inclusion: {in: (1..5)}, presence: true 
    validates :body, :listing_id, :user_id, presence: true 

    belongs_to :author,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :listing, 
        class_name: :Listing,
        foreign_key: :listing_id
        
end 
