import ListingIndex from './listing_index'
import { connect } from 'react-redux';
import {fetchListing, fetchListings, deleteListing} from '../../actions/listing_action'
import {withRouter} from 'react-router-dom'
import { clearFilters } from '../../actions/filter_actions'


const mSTP = (state) => ({
    listings: Object.values(state.entities.listings),
    filter: state.ui.filter.location,
    changeMap: {
        "NewYorkCity": {coords: [40.76, -73.98], zoom: 14 }, 
        "Miami": {coords: [25.7617, 80.1918], zoom: 13}, 
        "Chicago": {coords: [41.8821009, -87.6377712], zoom: 14}, 
        "LosAngeles": {coords: [34.0450184, -118.3421892], zoom: 11}, 
        "LasVegas": {coords: [36.1699,115.1398], zoom: 13}, 
        "AtlanticCity": {coords: [39.3643, 74.4229], zoom: 13}
    }
})

const mDTP = (dispatch) => ({
    fetchListing: (id) => dispatch(fetchListing(id)),
    fetchListings: (filter) => dispatch(fetchListings(filter)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    clearFilters: () => dispatch(clearFilters()),
})

export default withRouter(connect(mSTP, mDTP)(ListingIndex))