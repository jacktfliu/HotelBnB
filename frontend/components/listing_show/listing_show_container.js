import {connect} from 'react-redux'
import { fetchListings, fetchListing } from '../../actions/listing_action'
import ListingShow from './listing_show'
import { deleteListing } from '../../actions/listing_action'
import { updateListing } from '../../actions/listing_action'

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
        fetchListing: (id) => dispatch(fetchListing(id)),
        deleteListing: (listingId) => dispatch(deleteListing(listingId)),
        updateListing: (listing) => dispatch(updateListing(listing))
    }
}

export default connect(mSTP, mDTP)(ListingShow)