import {connect} from 'react-redux'
import { fetchListings, fetchlisting } from '../../actions/listing_action'
import ListingShow from './listing_show'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingId: ownProps.match.params.listingId
})

const mDTP = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchlisting: (id) => dispatch(fetchlisting(id))
})

export default connect(mSTP, mDTP)(ListingShow)