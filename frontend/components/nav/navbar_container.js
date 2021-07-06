import {connect} from 'react-redux'
import {logout,signup,login} from '../../actions/session_actions'
import NavBar from './navbar'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup()),
    login: () => dispatch(login())
})

export default connect(mSTP, mDTP)(NavBar)