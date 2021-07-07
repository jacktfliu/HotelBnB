# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!([{username: 'jack', password: '1234561', first_name: 'jacky', last_name: 'lacky', email:'hello@hello.com'}])

listing = Listing.create!([{title: "PentHouse", price: 150.00, description: 'this is the spot', location: 'nyc', bedroom: 5, bathroom: 3, longitude: 40.7484, latitude: 73.9857, owner_id: 1 }])