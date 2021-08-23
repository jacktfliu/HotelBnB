import {connect} from 'react-redux'
import ListingShow from './listing_show'
import { updateListing, fetchListings, fetchListing, deleteListing} from '../../actions/listing_action'
import { deleteReview, fetchReviews} from '../../actions/review_action'
import { createReservation } from '../../actions/reservation_action'

const mSTP = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        listing: state.entities.listings[ownProps.match.params.listingId],
        listingId: ownProps.match.params.listingId,
        reviews: Object.values(state.entities.reviews),
    }
}

const mDTP = (dispatch) => {
    return{
        fetchListings: () => dispatch(fetchListings()),
        fetchListing: (id) => dispatch(fetchListing(id)),
        deleteListing: (listingId) => dispatch(deleteListing(listingId)),
        updateListing: (listing) => dispatch(updateListing(listing)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReservation: (reservation) => dispatch(createReservation(reservation)),
    }
}

export default connect(mSTP, mDTP)(ListingShow)