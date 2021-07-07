@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing,
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :longitude, 
            :latitude
    end
end