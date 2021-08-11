@reservations.each do |reservation|
    json.set! reservation.id do 
        json.extract! reservation, 
            :check_in_date, 
            :check_out_date, 
            :number_of_guest,
            :guest_id,
            :listing_id
    end
end