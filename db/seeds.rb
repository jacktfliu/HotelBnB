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
User.create({username: "JackJack", email: "Jack@user.com", password: "JackJack",first_name: 'Jack', last_name: 'Jack'})
User.create({username: "DemoUser", email: "demo@user.com", password: "DemoUser",first_name: 'Demo', last_name: 'Demo'})
User.create({username: "Paul", email: "Paul@user.com", password: "PaulPaul",first_name: 'Paul', last_name: 'Paul'})
User.create({username: "Chase", email: "Chase@user.com", password: "ChaseChase",first_name: 'Chase', last_name: 'Chase'})

#HotelBnB Listings 
Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

listing1 = Listing.create(
    title: "AC Hotel", 
    price: 150.00, 
    description: '',
    location: 'Downtown manhattan', 
    bedroom: 5, 
    bathroom: 3, 
    longitude: 40.7484, 
    latitude: 73.9857, 
    owner_id: 1,
    host_name: 'Jack', 
    city: 'New York City'
)

listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', '1.jpg')), filename: '1.jpg')





    
   
