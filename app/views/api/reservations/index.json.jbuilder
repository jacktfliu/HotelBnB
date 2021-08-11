@reservations.each do |reservation|
    json.set! reservation.id do 
        json.extract! reservation.listing,
            :title,
            :price
        json.extract! reservation, 
            :id,
            :check_in_date, 
            :check_out_date, 
            :number_of_guest,
            :guest_id,
            :listing_id
    end
end