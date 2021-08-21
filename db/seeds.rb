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


#HotelBnB Listings 
Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

listing1 = Listing.create(
    title: "AC Hotel", 
    price: 150.00, 
    description: '',
    location: 'NewYorkCity', 
    bedroom: 5, 
    bathroom: 3, 
    longitude: 40.7484, 
    latitude: 73.9857, 
    owner_id: 1,
    host_name: 'Jack', 
    city: 'slkdhfslf'
)

listing1.photos.attach(io: File.open(Rails.root.join('app', 'assets', 'images', '1.jpg')), filename: '1.jpg')





    
   
