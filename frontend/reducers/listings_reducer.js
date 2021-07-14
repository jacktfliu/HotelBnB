import {RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING} from '../actions/listing_action'
import { RECEIVE_REVIEWS } from '../actions/review_action';


const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_LISTINGS:
            return action.listings
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing }
            return Object.assign({}, state, newListing);
        case REMOVE_LISTING:
            let newState = Object.assign({}, state)
            delete newState[action.listingId]
            return newState
        default: 
            return state
    }
}

export default listingsReducer