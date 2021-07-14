import {RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_action'
import { RECEIVE_LISTING } from '../actions/listing_action';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            const newReview= { [action.review.id]: action.review }
            return Object.assign({}, state, newReview);
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state)
            delete newState[action.reviewId]
            return newState
        case RECEIVE_LISTING:
            return action.listing.reviews
        default: 
            return state
    }
}

export default reviewsReducer