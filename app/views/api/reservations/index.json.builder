@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, 
            :id,
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :longitude, 
            :latitude,
            :owner_id
    end 
end 