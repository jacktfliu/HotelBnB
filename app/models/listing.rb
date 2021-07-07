# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  location    :string           not null
#  bedroom     :integer          not null
#  bathroom    :integer          not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  price       :float            not null
#  longitude   :float            not null
#  latitude    :float            not null
#
class Listing < ApplicationRecord
    validates :title, :price, :description, :location, :bedroom, presence: true 
    validates :longitude, :latitude, :owner_id, presence: true 

    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id
    

end
