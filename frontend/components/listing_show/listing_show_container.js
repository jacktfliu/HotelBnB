import {connect} from 'react-redux'
import { fetchListings, fetchListing } from '../../actions/listing_action'
import ListingShow from './listing_show'

const mSTP = (state, ownProps) => {
    // currentUser: state.entities.users[state.session.id],
    return{
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingId: ownProps.match.params.listingId
    }
}

const mDTP = (dispatch) => {
    return{
        fetchListings: () => dispatch(fetchListings()),
        fetchListing: (id) => dispatch(fetchListing(id))
    }
}

export default connect(mSTP, mDTP)(ListingShow)