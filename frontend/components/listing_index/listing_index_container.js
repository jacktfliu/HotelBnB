import ListingIndex from './listing_index'
import { connect } from 'react-redux';
import {fetchListing, fetchListings, deleteListing} from '../../actions/listing_action'
import {withRouter} from 'react-router-dom'
import { clearFilters } from '../../actions/filter_actions';


const mSTP = (state) => ({
    listings: Object.values(state.entities.listings),
    filter: state.ui.filter.location
})

const mDTP = (dispatch) => ({
    fetchListing: (id) => dispatch(fetchListing(id)),
    fetchListings: (filter) => dispatch(fetchListings(filter)),
    deleteListing: (listingId) => dispatch(deleteListing(listingId)),
    clearFilters: () => dispatch(clearFilters()),
})

export default withRouter(connect(mSTP, mDTP)(ListingIndex))