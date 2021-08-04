import {RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservation_action'

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case REMOVE_RESERVATION: 
            let newState = Object.assign({}, state)
            delete newState[action.reservationId]
            return newState
        default: 
            return state
    }
}

export default reservationsReducer;