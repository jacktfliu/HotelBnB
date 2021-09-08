# README

HotelBnB is a fullstack clone of AirBnB where users can explore, book and review listings.

![front](https://user-images.githubusercontent.com/82416350/132426455-d53de0ab-7132-4689-b4fa-3beedf9c9c67.gif)


# Technologies
HotelBnB is built with Ruby on Rails and PostgreSQL on the backend. HotelBnB also utilizes JavaScript, React and Redux for the frontend state management. Styling is implemented with CSS and HTML5. Google Maps API is used to render maps on the application. AWS is used to host photos uploaded and photos seeded. 

# Features

## User Authentication
Users are able to login and signup via a modal on any page that has a navbar. The users credentials is then authenticated through the backend and would display the appropiate response error messages to the user. A demo user was implemented to bypass sign up.

![login](https://user-images.githubusercontent.com/82416350/132426721-e659520d-97e0-4ac0-b01d-2672095d483f.gif)


## Listing 
Logged in users are able to create, update and delete listings. Users who are creating a listing are able to upload five photos through AWS intergration. 

Created listings are shown in the main index page. 
![listing](https://user-images.githubusercontent.com/82416350/132427202-c808ba83-ba64-4f14-9757-22ae62c7ee86.gif)

Different listings belong to different cities. 
![listings](https://user-images.githubusercontent.com/82416350/132427426-004d001d-8d65-40e4-acc4-d20cd1a2adf9.gif)

Users can create listings based on different criteria.
![hosting](https://user-images.githubusercontent.com/82416350/132427558-fdfbe3d5-02fc-4c39-9ca2-f2ff1adab450.gif)

## Reservations
When a user is logged in, they can make reservations. Using the reservations tab, users can view and cancel their reservations. 
![Reserve](https://user-images.githubusercontent.com/82416350/132432237-59028fcc-3951-4b65-94ad-7172bf14b752.gif)

## Reviews
Once logged in users are able to write and delete reviews for listings.
![Reviews](https://user-images.githubusercontent.com/82416350/132432844-4b803d57-c767-43bd-a438-6534e705269a.gif)

## Google Map Api filter 
Newly created listings will have its own individual map with a pin on it. All the pins will be shown on the index page where it lists all the rentals. 

![Google](https://user-images.githubusercontent.com/82416350/132433165-4db108b7-0cc3-4e84-ae01-96b8b77a0519.gif)







