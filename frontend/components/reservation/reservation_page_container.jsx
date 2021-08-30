import {connect} from 'react-redux';
import ReservationPage from './reservation_page';
import { deleteReservation, fetchReservation, fetchReservations, createReservation } from '../../actions/reservation_action';
import {fetchListings, fetchListing} from '../../actions/listing_action';

const mSTP = (state) => ({
    reservations: Object.values(state.entities.reservations),
    currentUser: state.entities.users[state.session.id],
    listings: state.entities.listings
})

const mDTP = dispatch => ({
    deleteReservation: (id) => dispatch(deleteReservation(id)),
    fetchReservations: () => dispatch(fetchReservations()),
    fetchReservation: (user_id) => dispatch(fetchReservation(user_id)),
    fetchListings: () => dispatch(fetchListings()),
})

export default connect(mSTP, mDTP)(ReservationPage)
