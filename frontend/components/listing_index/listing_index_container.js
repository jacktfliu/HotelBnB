import ListingIndex from './listing_index'
import { connect } from 'react-redux';
import {fetchListing, fetchListings} from '../../actions/listing_action'
import {withRouter} from 'react-router-dom'

const mSTP = (state) => ({
    listings: Object.values(state.entities.listings)
})

const mDTP = (dispatch) => ({
    fetchListing: (id) => dispatch(fetchListing(id)),
    fetchListings: () => dispatch(fetchListings())
})

export default withRouter(connect(mSTP, mDTP)(ListingIndex))