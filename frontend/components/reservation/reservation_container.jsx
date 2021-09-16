import {connect} from 'react-redux'
import ReservationForm from './reservation_form'
import { createReservation } from '../../actions/reservation_action'
import { openModal } from '../../actions/modal_actions'
import {login} from '../../actions/session_actions'


const mSTP = (state, ownProps) => ({    
    reservation: {
        check_in_date: null,
        check_out_date: null,
        number_of_guest: 1,
        guest_id: state.session.id
    }, 
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user)),
    createReservation: (formData) => dispatch(createReservation(formData))
})

export default connect(mSTP, mDTP)(ReservationForm)