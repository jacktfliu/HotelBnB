# README

HotelBnB is a fullstack clone of AirBnB where users can explore, book and review listings.

Here is the [live site!](https://hotelbnb-main.herokuapp.com/)

![front](https://user-images.githubusercontent.com/82416350/132426455-d53de0ab-7132-4689-b4fa-3beedf9c9c67.gif)


# Technologies
HotelBnB is built with Ruby on Rails and PostgreSQL on the backend. HotelBnB also utilizes JavaScript, React and Redux for the frontend state management. Styling is implemented with CSS and HTML5. Google Maps API is used to render maps on the application. AWS is used to host photos uploaded and photos seeded. 

# Features

## User Authentication
Users are able to login and signup via a modal on any page that has a navbar. The users credentials is then authenticated through the backend and would display the appropiate response error messages to the user. A demo user was implemented to bypass sign up.

![login](https://user-images.githubusercontent.com/82416350/132426721-e659520d-97e0-4ac0-b01d-2672095d483f.gif)


## Listing 
Listings can be created, updated, and deleted by logged-in users. Through AWS integration, users are able to upload up to five photos for their listing. 

Created listings are shown in the main index page. 
![listing](https://user-images.githubusercontent.com/82416350/132427202-c808ba83-ba64-4f14-9757-22ae62c7ee86.gif)

Different listings belong to different cities. 
![listings](https://user-images.githubusercontent.com/82416350/132427426-004d001d-8d65-40e4-acc4-d20cd1a2adf9.gif)

Users can create listings based on different criteria.
![hosting](https://user-images.githubusercontent.com/82416350/132427558-fdfbe3d5-02fc-4c39-9ca2-f2ff1adab450.gif)

## Reservations
Users can make reservations once they are logged in. Users can view and cancel their reservations using the reservations tab. 
![Reserve](https://user-images.githubusercontent.com/82416350/132432237-59028fcc-3951-4b65-94ad-7172bf14b752.gif)


You can find this code on the reservations page for the user. In order to make a reservation, the user must sign up or log in if they are not already logged in. Upon logging in and signing up, the user will be able to reserve the listing and then will be redirected to their reservations page. The code iterates through all listings associated with the specific user. It then retrieves the details of the reservation, including the listing image. The corresponding photo and details associated with the reservation are then displayed.

```javascript
<div className='reservations'>
    {
        this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`} className='reservation-container'>
                <img className='reservation-img' src={this.props.listings[reservation.listing_id] ?      
                      this.props.listings[reservation.listing_id].photos[0] : ''}>
                </img>
                <div className='reservation-wrapper'>
                    <h1>{reservation.title}</h1>
                    <h2>Reservation dates: {reservation.check_in_date.split('T')[0]} to {reservation.check_out_date.split('T')[0]}</h2>
                    <p>Number of Guests: {reservation.number_of_guest}</p>
                </div>
                <div className='cancel-reservation-container'>
                    <button onClick={() => this.props.history.push(`listings/${reservation.listing_id}`)} className='back-to-link'>Go to 
                     listing</button> 
                    <button onClick={() => this.props.deleteReservation(reservation.id)} className='cancel-reservation'>Cancel Reservation</button>
                </div>
            </div>
        ))
    }
</div>
```

## Reviews
Once logged in users are able to write and delete reviews for listings.
![Reviews](https://user-images.githubusercontent.com/82416350/132432844-4b803d57-c767-43bd-a438-6534e705269a.gif)

## Google Map Api filter 
An individual pin will be displayed on the map for each newly created listing. The pins will be displayed on the index page where it displays all the listings.

![Google](https://user-images.githubusercontent.com/82416350/132433165-4db108b7-0cc3-4e84-ae01-96b8b77a0519.gif)

This block of code changes the map and pins of listings on the map depending on which city the user clicks. 
```javascript
componentDidMount() {
  const {changeMap, listings} = this.props
  const mapOptions = {
    center: { lat: changeMap.coords[0], lng: changeMap.coords[1]},
    zoom: changeMap.zoom,
    mapTypeId: 'terrain'
  };

  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);
  this.MarkerManager.updateMarkers(this.props.listings);
}
```

# BONUS Features

## Search Bar

Users are able to search through different listings based on different cities
![serach](https://user-images.githubusercontent.com/82416350/132592464-6705959a-289e-4248-854a-ea49fc736f19.gif)



