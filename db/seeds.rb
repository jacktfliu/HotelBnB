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
User.create({username: 'jack', email:'jack@jack.com', password:'jackjack', first_name: 'jack', last_name: 'jack'})


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
    owner_id: 2,
    host_name: 'Vincent', 
    city: 'Manhattan'
})

listing2 = Listing.create!({
    title: 'Center of it all',
    price: 200,
    description: 'Enjoy a comfortable stay in our modern yet charming room designed to meet all your needs. Our Social rooms offer unparalleled comfort, and special touches make all the difference. Relax, get some work done, and take full advantage of your stay.', 
    location: 'NewYorkCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -73.988704,
    latitude: 40.757921,
    owner_id: 2,
    host_name: 'Yung', 
    city: 'Manhattan'
})

listing3 = Listing.create!({
    title: 'High-rise: a birds eye view',
    price: 230,
    description: 'Well-placed high-rise in a prime Midtown spot on 45th between 5th and 6th Aves – a 7-minute stroll from the spectacle that is Times Square, with its neighboring Broadway theaters, shops and eateries galore. Plus an easy 14-minute jaunt from the equally famous Empire State Building.', 
    location: 'NewYorkCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -73.980187,
    latitude: 40.754951,
    owner_id: 2,
    host_name: 'Raph', 
    city: 'Manhattan'
})

listing4 = Listing.create!({
    title: 'Luxury club life',
    price: 150,
    description: 'The Manhattan Club is the perfect combination of luxury and location in the heart of New York City. Spend time in one of the oversized suites complete with amenities or explore nearby in Times Square or Central Park.', 
    location: 'NewYorkCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -73.983882,
    latitude: 40.764633,
    owner_id: 2,
    host_name: 'Jack', 
    city: 'Manhattan'
})

listing5 = Listing.create!({
    title: 'New York City Town House',
    price: 350,
    description: 'The William is a renovated townhouse into a modern hotel. With few rooms and a location just south of Grand Central Station, you will feel like you have an entire New York City townhouse to yourself. The home living room has been transformed into a hotel lobby and at night turns into a cocktail lounge.', 
    location: 'NewYorkCity',
    bedroom: 3,
    bathroom: 2,
    longitude: -73.977070,
    latitude: 40.761798,
    owner_id: 2,
    host_name: 'Kin', 
    city: 'Manhattan'
})

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
    owner_id: 2,
    host_name: 'Miguel', 
    city: 'Miami'
})

listing7 = Listing.create!({
    title: 'Everything is a arms length away.',
    price: 245,
    description: 'Located at the entrance to Wynwood. Walk to restaurants, bars, nightlife, shopping & the famous Wynwood Walls. Also walking distance to The Design District & Midtown Shopping. This place is centrally located less than a 10 min drive from Miami Airport & about 15 min to famous South beach. Also 15 minutes to Coconut Grove.', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.200335,
    latitude: 25.794945,
    owner_id: 2,
    host_name: 'Chase', 
    city: 'Miami'
})

listing8 = Listing.create!({
    title: 'Miami lifestyle',
    price: 230,
    description: 'Experience the Miami lifestyle in this modern studio by the bay overlooking the Downtown Miami skyline. It is located minutes away from the beach, Bal Harbour Shops, South Beach, Downtown Miami, Aventura Mall, and a variety of shopping outlets. The building has a swimming pool, BBQ area, and all exposed to the bay.', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.190032,
    latitude: 25.798655,
    owner_id: 2,
    host_name: 'Chase', 
    city: 'Miami'
})

listing9 = Listing.create!({
    title: 'Heart of Miami',
    price: 220,
    description: 'Heart of Miami in the Famous Wynwood Art District. "Gated Free Parking" In this choice 3 Bedroom - 2 bath apartment-- Centrally located to where it all happens and where you want to be. Within a 1 min walk to Wynwood Art Walls and a 3 minute walk to sought-after Restaurants, Clubs and Specialty Shops. 10 min Uber ride to Midtown, Brickell, Downtown and a 15 Min drive over to South Beach & Lincoln Road. ', 
    location: 'Miami',
    bedroom: 3,
    bathroom: 2,
    longitude: -80.200060,
    latitude: 25.806228,
    owner_id: 2,
    host_name: 'Raph', 
    city: 'Miami'
})

listing10 = Listing.create!({
    title: 'Zen Queen Suite Inn',
    price: 170,
    description: 'Located inside the beautiful Zenmotel Inn, this charming unit offers guests all of the luxuries of a 5-star hotel with the comforts of a home-like atmosphere. The Zen Queen Suite boasts handmade Balinese furniture, a comfortable queen size bed, HD television and cable, complimentary robes and Wi-Fi, bathroom shower amenities, and a fully equipped kitchenette.', 
    location: 'Miami',
    bedroom: 1,
    bathroom: 1,
    longitude: -80.195439,
    latitude: 25.803185,
    owner_id: 2,
    host_name: 'Jack', 
    city: 'Miami'
})

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
    owner_id: 2,
    host_name: 'Joseph', 
    city: 'Vegas'
})

listing12 = Listing.create!({
    title: '1 Bedroom Suite Near Vegas Strip',
    price: 160,
    description: 'Just a mere 1.5 blocks from the world-famous Las Vegas Strip and several of the town grandest casinos. This location provides easy access to all the shows, shops, restaurants, casinos and excitement that Las Vegas has to offer.', 
    location: 'LasVegas',
    bedroom: 1,
    bathroom: 1,
    longitude: -115.160818,
    latitude: 36.111062,
    owner_id: 2,
    host_name: 'Joseph', 
    city: 'Vegas'
})

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
    owner_id: 2,
    host_name: 'Isaac', 
    city: 'Vegas'
})

listing14 = Listing.create!({
    title: 'Sahara Las Vegas, Marra 1 King',
    price: 270,
    description: 'SAHARA Las Vegas has three hotel towers, each creating a unique experience for guests. Named after Casablanca, a city of legend, Blanca Tower is where timeless meets right now. All 196 rooms have been fully renovated, with playful stories hiding around every corner. It’s a place that plays by its own rules, and you’re welcome to play along. Designed as an intimate boutique hotel in its own right, Blanca Tower captures an energetic, iconic vibe like nothing else in Las Vegas. Each room is a minimal masterpiece where your own legend awaits.', 
    location: 'LasVegas',
    bedroom: 2,
    bathroom: 1,
    longitude: -115.1567827,
    latitude: 36.14435,
    owner_id: 2,
    host_name: 'Isaac', 
    city: 'Vegas'
})

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
    owner_id: 2,
    host_name: 'Jack', 
    city: 'Vegas'
})

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
    owner_id: 2,
    host_name: 'Sam', 
    city: 'LA'
})

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
    owner_id: 2,
    host_name: 'Sam', 
    city: 'LA'
})

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
    owner_id: 2,
    host_name: 'Eric', 
    city: 'LA'
})

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
    owner_id: 2,
    host_name: 'Raph', 
    city: 'LA'
})

listing20 = Listing.create!({
    title: '1920s Restored Tudor Classic',
    price: 210,
    description: 'Enjoy an indulgent stay in your very own updated upper level of a 1920s Old Hollywood English Tudor at the top of the hill next to Paramount studios. Clear views or the iconic Hollywood sign to the north and the skyscrapers of Downtown LA to the east. Relish in the all year California warm weather thats located literally in the middle of Los Angeles, the house is at the apex of koreatown, silver lake and Los Filez while minutes from Hollywood and Downtown LA. Features 2 bedroom and 2 bath.', 
    location: 'LosAngeles',
    bedroom: 2,
    bathroom: 2,
    longitude: -118.30669,
    latitude: 34.07164,
    owner_id: 2,
    host_name: 'Kin', 
    city: 'LA'
})

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
    owner_id: 2,
    host_name: 'Paul', 
    city: 'New Jeresy'
})

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
    owner_id: 2,
    host_name: 'Ali', 
    city: 'New Jeresy'
})

listing23 = Listing.create!({
    title: 'Beach and Boardwalk',
    price: 200,
    description: 'The sophisticated styling 33-story resort is a reflection of the citys elegant shopping, five-star restaurants and upscale casinos. A swim in the expansive indoor pool will set the mood for a romantic stroll down the Jersey Shore as you take in views of the amusement pier and Absecon Lighthouse.', 
    location: 'AtlanticCity',
    bedroom: 2,
    bathroom: 1,
    longitude: -74.41939,
    latitude: 39.36152,
    owner_id: 2,
    host_name: 'Ali', 
    city: 'New Jeresy'
})

listing24 = Listing.create!({
    title: 'Oceanfront Studio in the Atlantic Palace',
    price: 195,
    description: 'Atlantic Palace Suites places you right in the middle of all the action you could want, yet separates you in a quiet, comfortable hotel atmosphere without the hustle of the casinos. “this is the perfect compromise for a perfect vacation. Beach, casino, pool, game room. Everybody’s happy!”', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.42352,
    latitude: 39.35927,
    owner_id: 2,
    host_name: 'Sohrob', 
    city: 'New Jeresy'
})

listing25 = Listing.create!({
    title: 'Boardwalk and Ocean Front',
    price: 190,
    description: 'Location, Location, Location! This condo is on the 10th floor of the building and has amazing views of the boardwalk, ocean, and casino night life. The best part? We are located ON the boardwalk, so you can walk right out the front door and just steps to the beach, boardwalk, and nightlife that Atlantic City is famous for!', 
    location: 'AtlanticCity',
    bedroom: 1,
    bathroom: 1,
    longitude: -74.41104,
    latitude: 39.36443,
    owner_id: 2,
    host_name: 'Sohrob', 
    city: 'New Jeresy'
})

# #Chicago 

# listing26 = Listing.create!({
#     title: '',
#     price: ,
#     description: '', 
#     location: 'Chicago',
#     bedroom: ,
#     bathroom: ,
#     longitude: ,
#     latitude: ,
#     owner_id: 2,
#     host_name: '', 
#     city: ''
# })

# listing27 = Listing.create!({
#     title: '',
#     price: ,
#     description: '', 
#     location: 'Chicago',
#     bedroom: ,
#     bathroom: ,
#     longitude: ,
#     latitude: ,
#     owner_id: 2,
#     host_name: '', 
#     city: ''
# })

# listing28 = Listing.create!({
#     title: '',
#     price: ,
#     description: '', 
#     location: 'Chicago',
#     bedroom: ,
#     bathroom: ,
#     longitude: ,
#     latitude: ,
#     owner_id: 2,
#     host_name: '', 
#     city: ''
# })

# listing29 = Listing.create!({
#     title: '',
#     price: ,
#     description: '', 
#     location: 'Chicago',
#     bedroom: ,
#     bathroom: ,
#     longitude: ,
#     latitude: ,
#     owner_id: 2,
#     host_name: '', 
#     city: ''
# })

# listing30 = Listing.create!({
#     title: '',
#     price: ,
#     description: '', 
#     location: 'Chicago',
#     bedroom: ,
#     bathroom: ,
#     longitude: ,
#     latitude: ,
#     owner_id: 2,
#     host_name: '', 
#     city: ''
# })
