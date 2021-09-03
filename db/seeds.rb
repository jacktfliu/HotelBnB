# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Users 
User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
User.create({username: "DemoUser", email: "demo@user.com", password: "DemoUser",first_name: 'Demo', last_name: 'Demo'})
jack = User.create({username: 'jack', email:'jack@jack.com', password:'jackjack', first_name: 'jack', last_name: 'jack'})


#HotelBnB Listings 
Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

#NewYork
listing1 = Listing.create!({
    title: 'Manhattan High life',
    price: 300,
    description: 'One of the best views of the city if not the best view of the city. A newer luxury condo in the heart of the city. Enjoyed everything the city has to offer, Broadway plays walk to with in mins, Madison Square Garden, Center Park, high end shopping of 5th Ave and the best restaurant in the world unless you feel like a $1.00 slice of pizza Manhattan has that for you to. Perfect home away from home for you and the family.', 
    location: 'NewYorkCity',
    bedroom: 5,
    bathroom: 2,
    longitude: -73.987747,
    latitude: 40.750433,
    owner_id: jack.id,
    host_name: 'Vincent', 
    city: 'Manhattan',
})

listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '1.webp')), filename: '1.webp')
listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '2.webp')), filename: '2.webp')
listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '3.webp')), filename: '3.webp')
listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '4.webp')), filename: '4.webp')
listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '5.webp')), filename: '5.webp')


listing2 = Listing.create!({
    title: 'Center of it all',
    price: 200,
    description: 'Enjoy a comfortable stay in our modern yet charming room designed to meet all your needs. Our Social rooms offer unparalleled comfort, and special touches make all the difference. Relax, get some work done, and take full advantage of your stay.', 
    location: 'NewYorkCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -73.988704,
    latitude: 40.757921,
    owner_id: jack.id,
    host_name: 'Yung', 
    city: 'Manhattan'
})

listing2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '6.webp')), filename: '6.webp')
listing2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '7.webp')), filename: '7.webp')
listing2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '8.webp')), filename: '8.webp')
listing2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '9.webp')), filename: '9.webp')
listing2.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '10.webp')), filename: '10.webp')

listing3 = Listing.create!({
    title: 'High-rise: a birds eye view',
    price: 230,
    description: 'Well-placed high-rise in a prime Midtown spot on 45th between 5th and 6th Aves – a 7-minute stroll from the spectacle that is Times Square, with its neighboring Broadway theaters, shops and eateries galore. Plus an easy 14-minute jaunt from the equally famous Empire State Building.', 
    location: 'NewYorkCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -73.980187,
    latitude: 40.754951,
    owner_id: jack.id,
    host_name: 'Raph', 
    city: 'Manhattan'
})

listing3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '11.webp')), filename: '11.webp')
listing3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '12.webp')), filename: '12.webp')
listing3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '13.webp')), filename: '13.webp')
listing3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '14.webp')), filename: '14.webp')
listing3.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '15.webp')), filename: '15.webp')

listing4 = Listing.create!({
    title: 'Luxury club life',
    price: 150,
    description: 'The Manhattan Club is the perfect combination of luxury and location in the heart of New York City. Spend time in one of the oversized suites complete with amenities or explore nearby in Times Square or Central Park.', 
    location: 'NewYorkCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -73.983882,
    latitude: 40.764633,
    owner_id: jack.id,
    host_name: 'Jack', 
    city: 'Manhattan'
})

listing4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '16.webp')), filename: '16.webp')
listing4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '17.webp')), filename: '17.webp')
listing4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '18.webp')), filename: '18.webp')
listing4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '19.webp')), filename: '19.webp')
listing4.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '20.webp')), filename: '20.webp')

listing5 = Listing.create!({
    title: 'New York City Town House',
    price: 350,
    description: 'The William is a renovated townhouse into a modern hotel. With few rooms and a location just south of Grand Central Station, you will feel like you have an entire New York City townhouse to yourself. The home living room has been transformed into a hotel lobby and at night turns into a cocktail lounge.', 
    location: 'NewYorkCity',
    bedroom: 3,
    bathroom: 2,
    longitude: -73.977070,
    latitude: 40.761798,
    owner_id: jack.id,
    host_name: 'Kin', 
    city: 'Manhattan'
})

listing5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '21.webp')), filename: '21.webp')
listing5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '22.webp')), filename: '22.webp')
listing5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '23.webp')), filename: '23.webp')
listing5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '24.webp')), filename: '24.webp')
listing5.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '25.webp')), filename: '25.webp')

#Miami
listing6 = Listing.create!({
    title: 'Cozy place by the bay',
    price: 155,
    description: 'We welcome you to experience the Miami lifestyle in this modern one-bedroom apt on the bay overlooking Downtown Miami Skyline. It is located minutes away from the beach, Bal Harbour Shops, South Beach, Downtown Miami, Aventura Mall, and a variety of shopping outlets. The building has a swimming pool, BBQ area, and all exposed to the bay. This apartment offers you one queen size bed, full bathroom, WI-FI, couch & air mattress, and a fully equipped kitchen', 
    location: 'Miami',
    bedroom: 1,
    bathroom: 1,
    longitude: -80.184443,
    latitude: 25.815239,
    owner_id: jack.id,
    host_name: 'Miguel', 
    city: 'Miami'
})

listing6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '26.webp')), filename: '26.webp')
listing6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '27.webp')), filename: '27.webp')
listing6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '28.webp')), filename: '28.webp')
listing6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '29.webp')), filename: '29.webp')
listing6.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '30.webp')), filename: '30.webp')

listing7 = Listing.create!({
    title: 'Everything is a arms length away.',
    price: 245,
    description: 'Located at the entrance to Wynwood. Walk to restaurants, bars, nightlife, shopping & the famous Wynwood Walls. Also walking distance to The Design District & Midtown Shopping. This place is centrally located less than a 10 min drive from Miami Airport & about 15 min to famous South beach. Also 15 minutes to Coconut Grove.', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.200335,
    latitude: 25.794945,
    owner_id: jack.id,
    host_name: 'Chase', 
    city: 'Miami'
})

listing7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '31.webp')), filename: '31.webp')
listing7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '32.webp')), filename: '32.webp')
listing7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '33.webp')), filename: '33.webp')
listing7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '34.webp')), filename: '34.webp')
listing7.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '35.webp')), filename: '35.webp')

listing8 = Listing.create!({
    title: 'Miami lifestyle',
    price: 230,
    description: 'Experience the Miami lifestyle in this modern studio by the bay overlooking the Downtown Miami skyline. It is located minutes away from the beach, Bal Harbour Shops, South Beach, Downtown Miami, Aventura Mall, and a variety of shopping outlets. The building has a swimming pool, BBQ area, and all exposed to the bay.', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.190032,
    latitude: 25.798655,
    owner_id: jack.id,
    host_name: 'Chase', 
    city: 'Miami'
})

listing8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '36.webp')), filename: '36.webp')
listing8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '37.webp')), filename: '37.webp')
listing8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '38.webp')), filename: '38.webp')
listing8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '39.webp')), filename: '39.webp')
listing8.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '40.webp')), filename: '40.webp')

listing9 = Listing.create!({
    title: 'Heart of Miami',
    price: 220,
    description: 'Heart of Miami in the Famous Wynwood Art District. "Gated Free Parking" In this choice 3 Bedroom - 2 bath apartment-- Centrally located to where it all happens and where you want to be. Within a 1 min walk to Wynwood Art Walls and a 3 minute walk to sought-after Restaurants, Clubs and Specialty Shops. 10 min Uber ride to Midtown, Brickell, Downtown and a 15 Min drive over to South Beach & Lincoln Road. ', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.200060,
    latitude: 25.806228,
    owner_id: jack.id,
    host_name: 'Raph', 
    city: 'Miami'
})

listing9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '41.webp')), filename: '41.webp')
listing9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '42.webp')), filename: '42.webp')
listing9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '43.webp')), filename: '43.webp')
listing9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '44.webp')), filename: '44.webp')
listing9.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '45.webp')), filename: '45.webp')

listing10 = Listing.create!({
    title: 'Zen Queen Suite Inn',
    price: 170,
    description: 'Located inside the beautiful Zenmotel Inn, this charming unit offers guests all of the luxuries of a 5-star hotel with the comforts of a home-like atmosphere. The Zen Queen Suite boasts handmade Balinese furniture, a comfortable queen size bed, HD television and cable, complimentary robes and Wi-Fi, bathroom shower amenities, and a fully equipped kitchenette.', 
    location: 'Miami',
    bedroom: 1,
    bathroom: 1,
    longitude: -80.195439,
    latitude: 25.803185,
    owner_id: jack.id,
    host_name: 'Jack', 
    city: 'Miami'
})

listing10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '46.webp')), filename: '46.webp')
listing10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '47.webp')), filename: '47.webp')
listing10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '48.webp')), filename: '48.webp')
listing10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '49.webp')), filename: '49.webp')
listing10.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '50.webp')), filename: '50.webp')

#Vegas

listing11 = Listing.create!({
    title: 'Penthouse View',
    price: 155,
    description: 'The luxurious SkySuite is a 1bd, 1.5 bath penthouse suite located on the 53rd floor of The Vdara Hotel. Located in the heart-of-all-the-action & near Vegas’ best restaurants-next to Aria Resort, The Bellagio, & The Cosmopolitan.', 
    location: 'LasVegas',
    bedroom: 1,
    bathroom: 1,
    longitude: -115.1780532,
    latitude: 36.1094652,
    owner_id: jack.id,
    host_name: 'Joseph', 
    city: 'Vegas'
})

listing11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '51.webp')), filename: '51.webp')
listing11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '52.webp')), filename: '52.webp')
listing11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '53.webp')), filename: '53.webp')
listing11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '54.webp')), filename: '54.webp')
listing11.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '55.webp')), filename: '55.webp')

listing12 = Listing.create!({
    title: '1 Bedroom Suite Near Vegas Strip',
    price: 160,
    description: 'Just a mere 1.5 blocks from the world-famous Las Vegas Strip and several of the town grandest casinos. This location provides easy access to all the shows, shops, restaurants, casinos and excitement that Las Vegas has to offer.', 
    location: 'LasVegas',
    bedroom: 1,
    bathroom: 1,
    longitude: -115.160818,
    latitude: 36.111062,
    owner_id: jack.id,
    host_name: 'Joseph', 
    city: 'Vegas'
})

listing12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '56.webp')), filename: '56.webp')
listing12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '57.webp')), filename: '57.webp')
listing12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '58.webp')), filename: '58.webp')
listing12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '59.webp')), filename: '59.webp')
listing12.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '60.webp')), filename: '60.webp')

listing13 = Listing.create!({
    title: 'Perfect location Private 2b2b Gated Pool and Gym',
    price: 250,
    description: 'Cozy home away from home
    Pool and Gym
    Close to the strip but far enough to get away from the night life
    2 bathrooms one with a big soak
    Full Kitchen with start up coffee Keurig
    55 Roku TV in living room and one bedroom
    Gated with security', 
    location: 'LasVegas',
    bedroom: 2,
    bathroom: 2,
    longitude: -115.186221,
    latitude: 36.115491,
    owner_id: jack.id,
    host_name: 'Isaac', 
    city: 'Vegas'
})

listing13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '61.webp')), filename: '61.webp')
listing13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '62.webp')), filename: '62.webp')
listing13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '63.webp')), filename: '63.webp')
listing13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '64.webp')), filename: '64.webp')
listing13.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '65.webp')), filename: '65.webp')

listing14 = Listing.create!({
    title: 'Sahara Las Vegas, Marra 1 King',
    price: 270,
    description: 'SAHARA Las Vegas has three hotel towers, each creating a unique experience for guests. Named after Casablanca, a city of legend, Blanca Tower is where timeless meets right now. All 196 rooms have been fully renovated, with playful stories hiding around every corner. It’s a place that plays by its own rules, and you’re welcome to play along. Designed as an intimate boutique hotel in its own right, Blanca Tower captures an energetic, iconic vibe like nothing else in Las Vegas. Each room is a minimal masterpiece where your own legend awaits.', 
    location: 'LasVegas',
    bedroom: 2,
    bathroom: 1,
    longitude: -115.1567827,
    latitude: 36.14435,
    owner_id: jack.id,
    host_name: 'Isaac', 
    city: 'Vegas'
})

listing14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '66.webp')), filename: '66.webp')
listing14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '67.webp')), filename: '67.webp')
listing14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '68.webp')), filename: '68.webp')
listing14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '69.webp')), filename: '69.webp')
listing14.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '70.webp')), filename: '70.webp')

listing15 = Listing.create!({
    title: '2 Room in luxury Condo in the best high rise',
    price: 300,
    description: 'Rent a room into this LUXURY condo, in the most beautiful high rise on the middle of downtown Vegas on 9 floor.
        This condo is a corner unit so its always bright. Almost 2000 square fit. Full remodeled. Wash machine & dryer included. smart tv .
        Access to the pool and the gym center.
        Internet and electricity are included.
        BACKGROUND CHECK. Strict rules has to be respected.
        Due to covid, no guest allowed in the condo. No drugs. Cigarettes only on balcony. My Cat is inside the condo.', 
    location: 'LasVegas',
    bedroom: 2,
    bathroom: 2,
    longitude: -115.1508047,
    latitude: 36.140300,
    owner_id: jack.id,
    host_name: 'Jack', 
    city: 'Vegas'
})

listing15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '71.webp')), filename: '71.webp')
listing15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '72.webp')), filename: '72.webp')
listing15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '73.webp')), filename: '73.webp')
listing15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '74.webp')), filename: '74.webp')
listing15.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '75.webp')), filename: '75.webp')

#LosAngeles

listing16 = Listing.create!({
    title: 'Cozy Modern Guest House Echo Park',
    price: 300,
    description: 'Cozy Modern Guesthouse on quiet, tree-filled hillside in Echo Park is light filled, private, and clean. Its the perfect place to rest while visiting Los Angeles. Enjoy the new mini gourmet kitchen and the new bathroom with newly refinished claw foot tub. In the bedroom both the queen mattress and pillow top are new, as are the 500 count linens and new pillows.', 
    location: 'LosAngeles',
    bedroom: 4,
    bathroom: 3,
    longitude: -118.248597,
    latitude: 34.088243,
    owner_id: jack.id,
    host_name: 'Sam', 
    city: 'LA'
})

listing16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '76.webp')), filename: '76.webp')
listing16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '77.webp')), filename: '77.webp')
listing16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '78.webp')), filename: '78.webp')
listing16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '79.webp')), filename: '79.webp')
listing16.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '80.webp')), filename: '80.webp')

listing17 = Listing.create!({
    title: 'Old World Townhouse in SM, Full of Charm',
    price: 350,
    description: '• Absolutely adorable 2 bedroom/ 1 bathroom townhouse
        • Tons of natural light
        • A/C
        • Washer/dryer in unit
        • Beautiful landscaping/lots of green
        • Located on 6th & Montana
        • 5 min walk to the beach
        • Hardwood floors, granite countertops, stainless steel appliances
        • Gated property
        • Garage included', 
    location: 'LosAngeles',
    bedroom: 3,
    bathroom: 2,
    longitude: -118.410774,
    latitude: 34.00812,
    owner_id: jack.id,
    host_name: 'Sam', 
    city: 'LA'
})

listing17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '81.webp')), filename: '81.webp')
listing17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '82.webp')), filename: '82.webp')
listing17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '83.webp')), filename: '83.webp')
listing17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '84.webp')), filename: '84.webp')
listing17.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '85.webp')), filename: '85.webp')

listing18 = Listing.create!({
    title: 'Secret Garden Suite - California Boho Paradise',
    price: 180,
    description: 'Secret Garden Getaway in the City. Great for social distancing!
        NEWLY RENOVATED charming space designed to reflect quintessential Boho California style in a stately Ranch style home.
        Located in the heart of historical Hancock Park and walking distance to some of the best shops and restaurants LA has to offer!
        Bright, airy and modern with touches of vintage and handmade art. Inside out living, with private patio and lots of light. All the creature comforts one needs to rest, work and play!', 
    location: 'LosAngeles',
    bedroom: 1,
    bathroom: 1,
    longitude: -118.39787,
    latitude: 34.048271,
    owner_id: jack.id,
    host_name: 'Eric', 
    city: 'LA'
})

listing18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '86.webp')), filename: '86.webp')
listing18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '87.webp')), filename: '87.webp')
listing18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '88.webp')), filename: '88.webp')
listing18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '89.webp')), filename: '89.webp')
listing18.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '90.webp')), filename: '90.webp')

listing19 = Listing.create!({
    title: 'Apartment w/ Queen Bed',
    price: 200,
    description: '
        2 bed/1 bath apartment located in the heart of Downtown Los Angeles!
        1 mile radius of the Staples Center/Convention Center, LA Live, Grand Central Market, Arts District, and lots of restaurants and bars! 10 mins away from Dodgers Stadium. Views of DTLA from the balcony, bedroom, and all points of the apartment.', 
    location: 'LosAngeles',
    bedroom: 2,
    bathroom: 1,
    longitude: -118.26888,
    latitude: 34.03612,
    owner_id: jack.id,
    host_name: 'Raph', 
    city: 'LA'
})

listing19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '91.webp')), filename: '91.webp')
listing19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '92.webp')), filename: '92.webp')
listing19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '93.webp')), filename: '93.webp')
listing19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '94.webp')), filename: '94.webp')
listing19.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '95.webp')), filename: '95.webp')

listing20 = Listing.create!({
    title: '1920s Restored Tudor Classic',
    price: 210,
    description: 'Enjoy an indulgent stay in your very own updated upper level of a 1920s Old Hollywood English Tudor at the top of the hill next to Paramount studios. Clear views or the iconic Hollywood sign to the north and the skyscrapers of Downtown LA to the east. Relish in the all year California warm weather thats located literally in the middle of Los Angeles, the house is at the apex of koreatown, silver lake and Los Filez while minutes from Hollywood and Downtown LA. Features 2 bedroom and 2 bath.', 
    location: 'LosAngeles',
    bedroom: 2,
    bathroom: 2,
    longitude: -118.30669,
    latitude: 34.07164,
    owner_id: jack.id,
    host_name: 'Kin', 
    city: 'LA'
})

listing20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '96.webp')), filename: '96.webp')
listing20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '97.webp')), filename: '97.webp')
listing20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '98.webp')), filename: '98.webp')
listing20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '99.webp')), filename: '99.webp')
listing20.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '100.webp')), filename: '100.webp')

#AtlanticCity

listing21 = Listing.create!({
    title: 'Cozy Ocean front Condo with amazing views!',
    price: 210,
    description: 'Condo on the 26th floor of the Atlantic Palace suites with AMAZING views of the ocean and Atlantic City! Convenient location with direct access to the boardwalk and walking distance to many casinos, including the Hard Rock , Oceans, Showboat, Resorts, and Ballys. Featuring a flat-screen TV, small kitchenette, updated bath with jacuzzi, a queen size bed ', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.414430,
    latitude: 39.370134,
    owner_id: jack.id,
    host_name: 'Paul', 
    city: 'New Jeresy'
})

listing21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '101.webp')), filename: '101.webp')
listing21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '102.webp')), filename: '102.webp')
listing21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '103.webp')), filename: '103.webp')
listing21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '104.webp')), filename: '104.webp')
listing21.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '105.webp')), filename: '105.webp')

listing22 = Listing.create!({
    title: 'Luxury Ocean Front Condo',
    price: 185,
    description: 'Ocean front studio with amazing views all the way down the beach. Watch sunrise over the ocean, sun by the third floor pool, walk right out the front door onto the world famous boardwalk...
        Just steps away from all the nightlife, food, sun, and casinos make our ocean front studio your home in Atlantic City.
        We provide a cook top, microwave, and dorm fridge so you can save some money by cooking in or reheating, while easily stepping out to the one of the dozens of amazing restaurants nearby.', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.41471,
    latitude: 39.36404,
    owner_id: jack.id,
    host_name: 'Ali', 
    city: 'New Jeresy'
})

listing22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '106.webp')), filename: '106.webp')
listing22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '107.webp')), filename: '107.webp')
listing22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '108.webp')), filename: '108.webp')
listing22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '109.webp')), filename: '109.webp')
listing22.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '110.webp')), filename: '110.webp')

listing23 = Listing.create!({
    title: 'Beach and Boardwalk',
    price: 200,
    description: 'The sophisticated styling 33-story resort is a reflection of the citys elegant shopping, five-star restaurants and upscale casinos. A swim in the expansive indoor pool will set the mood for a romantic stroll down the Jersey Shore as you take in views of the amusement pier and Absecon Lighthouse.', 
    location: 'AtlanticCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -74.41939,
    latitude: 39.36152,
    owner_id: jack.id,
    host_name: 'Ali', 
    city: 'New Jeresy'
})

listing23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '111.webp')), filename: '111.webp')
listing23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '112.webp')), filename: '112.webp')
listing23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '113.webp')), filename: '113.webp')
listing23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '114.webp')), filename: '114.webp')
listing23.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '115.webp')), filename: '115.webp')

listing24 = Listing.create!({
    title: 'Oceanfront Studio in the Atlantic Palace',
    price: 195,
    description: 'Atlantic Palace Suites places you right in the middle of all the action you could want, yet separates you in a quiet, comfortable hotel atmosphere without the hustle of the casinos. “this is the perfect compromise for a perfect vacation. Beach, casino, pool, game room. Everybody’s happy!”', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.42352,
    latitude: 39.35927,
    owner_id: jack.id,
    host_name: 'Sohrob', 
    city: 'New Jeresy'
})

listing24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '116.webp')), filename: '116.webp')
listing24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '117.webp')), filename: '117.webp')
listing24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '118.webp')), filename: '118.webp')
listing24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '119.webp')), filename: '119.webp')
listing24.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '120.webp')), filename: '120.webp')

listing25 = Listing.create!({
    title: 'Boardwalk and Ocean Front',
    price: 190,
    description: 'Location, Location, Location! This condo is on the 10th floor of the building and has amazing views of the boardwalk, ocean, and casino night life. The best part? We are located ON the boardwalk, so you can walk right out the front door and just steps to the beach, boardwalk, and nightlife that Atlantic City is famous for!', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.41104,
    latitude: 39.36443,
    owner_id: jack.id,
    host_name: 'Sohrob', 
    city: 'New Jeresy'
})

listing25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '121.webp')), filename: '121.webp')
listing25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '122.webp')), filename: '122.webp')
listing25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '123.webp')), filename: '123.webp')
listing25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '124.webp')), filename: '124.webp')
listing25.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '125.webp')), filename: '125.webp')

#Chicago 

listing26 = Listing.create!({
    title: 'River Norths Finest',
    price: 150,
    description: 'Great space...Great Location. Only blocks from Michigan Avenue shopping district and blocks from downtown loop. CTA Brown line station across the street. River North Art Galleries one street south. Great Dining, Millennium Park and all that Chicago has to offer only minutes away. Divvy bike station around the corner. Jump on the Brown Line across the street, be at Wrigley Field in 15 minutes.', 
    location: 'Chicago',
    bedroom: 2,
    bathroom: 2,
    longitude: -87.63736,
    latitude: 41.89127,
    owner_id: jack.id,
    host_name: 'Vincent', 
    city: 'Chicago'
})

listing26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '126.webp')), filename: '126.webp')
listing26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '127.webp')), filename: '127.webp')
listing26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '128.webp')), filename: '128.webp')
listing26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '129.webp')), filename: '129.webp')
listing26.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '130.webp')), filename: '130.webp')

listing27 = Listing.create!({
    title: 'Your sweet home in Chicago',
    price: 210,
    description: 'Enjoy loft-style floor plans and top-notch amenities in a walkable neighborhood that is brimming with Chicago character. Your stay includes 1 parking space. Our one-bedroom apartments offer all the comforts and conveniences of home living. Each apartment is fully furnished and equipped with Wi-Fi; multi-channel cable TV; full kitchen; dining area; living room; queen-size bed; ensuite bathroom; and washer & dryer in each unit.', 
    location: 'Chicago',
    bedroom: 1,
    bathroom: 1,
    longitude: -87.63497,
    latitude: 41.88509,
    owner_id: jack.id,
    host_name: 'Jack', 
    city: 'Chicago'
})

listing27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '131.webp')), filename: '131.webp')
listing27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '132.webp')), filename: '132.webp')
listing27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '133.webp')), filename: '133.webp')
listing27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '134.webp')), filename: '134.webp')
listing27.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '135.webp')), filename: '135.webp')

listing28 = Listing.create!({
    title: 'New Spot in West Town',
    price: 130,
    description: 'Comfortable spot thats close to downtown, without all the busy cars and street noise! Minutes away from the United Arena, as well as popular neighborhoods such as Wicker Park and South Loop. Guests with canine family members can enjoy a dog park a block away. The home also has smart technology features such as a key on your phone for added security. You can also enjoy great food from local Mexican, pizza, and burger places a short walk away.', 
    location: 'Chicago',
    bedroom: 2,
    bathroom: 1,
    longitude: -87.64310,
    latitude: 41.88404,
    owner_id: jack.id,
    host_name: 'Eric', 
    city: 'Chicago'
})

listing28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '136.webp')), filename: '136.webp')
listing28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '137.webp')), filename: '137.webp')
listing28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '138.webp')), filename: '138.webp')
listing28.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '139.webp')), filename: '139.webp')
listing28.photos.attach(io: File.open(Rails.root.join('app', 'assets36', 'images', 'listing_images', '140.webp')), filename: '140.webp')

listing29 = Listing.create!({
    title: 'Private Residence',
    price: 95,
    description: 'Fully FURNISHED 1 BED CONDO. Full Amenities building with outdoor pool, fitness center, party room & theater room. Open kitchen, granite counter tops, stainless steel appliances. Breakfast Bar. Hardwood floors. Flat screen TV in living room & bedroom. Newer Furniture throughout. King Bed. Comes with all linens, sheets & towels. Includes HDTV Cable w/DVR & WiFi Internet. ', 
    location: 'Chicago',
    bedroom: 1,
    bathroom: 1,
    longitude: -87.62667,
    latitude: 41.89050,
    owner_id: jack.id,
    host_name: 'Kyle', 
    city: 'Chicago'
})

listing29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '141.webp')), filename: '141.webp')
listing29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '142.webp')), filename: '142.webp')
listing29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '143.webp')), filename: '143.webp')
listing29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '144.webp')), filename: '144.webp')
listing29.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '145.webp')), filename: '145.webp')

listing30 = Listing.create!({
    title: 'The Professional’s Playground ',
    price: 150,
    description: 'Located at the epicenter of Chicagos cultural, historical, and business attractions, this luxurious 2 bedroom apartment offers guests all the comforts of home, whether on the road for work or play.
        Within walking distance are world famous attractions including: Millennium Park, the Bean, Navy Pier, Riverwalk, and museum campus. Additionally, guests are merely a block from an "L" train stop, which will transport passengers anywhere they could desire in the city.', 
    location: 'Chicago',
    bedroom: 2,
    bathroom: 1,
    longitude: -87.632827,
    latitude: 41.8864,
    owner_id: jack.id,
    host_name: 'Kyle', 
    city: 'Chicago'
})

listing30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '146.webp')), filename: '146.webp')
listing30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '147.webp')), filename: '147.webp')
listing30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '148.webp')), filename: '148.webp')
listing30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '149.webp')), filename: '149.webp')
listing30.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'listing_images', '150.webp')), filename: '150.webp')