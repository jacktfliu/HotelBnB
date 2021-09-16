import {connect} from 'react-redux'
import {logout,signup,login} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import NavBar from './navbar'
import { createListing } from '../../actions/listing_action'



const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    
    logout: () => dispatch(logout()),
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user)),
    createListing: (listing) => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(NavBar)
    