import React from 'react';
import MarkerManager from '../../util/market_manager';

class ListingIndexMap extends React.Component {
  constructor(props) {
    super(props)
  }
  
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

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  render() {
    const {listings} = this.props
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    )
  }
}

export default ListingIndexMap

