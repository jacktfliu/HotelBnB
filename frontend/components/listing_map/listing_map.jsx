import React from 'react';
import ReactDOM from 'react-dom';

// class ListingMap extends React.Component {
//   componentDidMount() {

//     const mapOptions = {
//       center: { lat: 37.7758, lng: -122.435 },
//       zoom: 13
//     };

//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//   }

//   render() {
//     return (
//       <div id='map-container' ref={ map => this.mapNode = map }></div>
//     )
//   }
// }
class ListingMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.listing){
    const { listing } = this.props

    const mapOptions = {
      center: { lat: listing.latitude, lng: listing.longitude },
      zoom: 15
    };


    this.map = new google.maps.Map(this.mapNode, mapOptions);


    new google.maps.Marker({
      position: new google.maps.LatLng(listing.latitude, listing.longitude),
      map: this.map,
      animation: google.maps.Animation.DROP,
    })
    }
  }

  
    render() {
    
      return (
        <div id='map-container' ref={ map => this.mapNode = map }></div>
      )
    }
  
}

export default ListingMap