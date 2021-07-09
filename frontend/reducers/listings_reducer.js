import {RECEIVE_LISTING, RECEIVE_LISTINGS} from '../actions/listing_action'

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_LISTINGS:
            debugger
            return action.listings
        // case RECEIVE_LISTING:
        //     return action.listing
        default: 
        debugger
            return state
    }
}

export default listingsReducer