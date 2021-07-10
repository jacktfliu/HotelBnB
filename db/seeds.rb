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
User.create({username: "JackJack", email: "Jack@user.com", password: "JackJack",first_name: 'Jack', last_name: 'Jack'})
User.create({username: "Paul", email: "Paul@user.com", password: "PaulPaul",first_name: 'Paul', last_name: 'Paul'})
User.create({username: "Chase", email: "Chase@user.com", password: "ChaseChase",first_name: 'Chase', last_name: 'Chase'})

#HotelBnB Listings 
Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

listing1 = Listing.create(
    title: "Empire State Building", 
    price: 150.00, 
    description: 'isssaa very tall yes', 
    location: 'NYC', 
    bedroom: 5, 
    bathroom: 3, 
    longitude: 40.7484, 
    latitude: 73.9857, 
    owner_id: 1
)

listing2 = Listing.create([{
    title: 'Palm Beach Resort',
    price: 200.00,
    description: 'issa very beachy yes sandy yes',
    location: 'Florida',
    bedroom: 3,
    bathroom: 2,
    longitude: -87.633537,
    latitude: 30.256924,
    owner_id: 2
}])

listing3 = Listing.create(
    title: 'Hilton San Francisco',
    price: 178.00,
    description: 'isssa verryyy nice yesss',
    location: 'Sand Francisco',
    bedroom: 3,
    bathroom: 2,
    longitude: 	37.785900,
    latitude: -122.410835,
    owner_id: 3
)

listing4 = Listing.create(
    title: 'Bellagio',
    price: 165.00,
    description: 'Super duper uber nice',
    location: 'Las Vegas',
    bedroom: 4,
    bathroom: 2,
    longitude: -115.176704,
    latitude: 36.112625,
    owner_id: 4
)
    
   
