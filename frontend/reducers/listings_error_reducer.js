import {
    RECEIVE_LISTING_ERRORS,
} from '../actions/listing_action'

const listingErrorReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_LISTING_ERRORS:
            let listingErrors = {}
            action.errors.forEach(err => {
                let key = err.split(' ')[0].toLowerCase();
                listingErrors[key] = err
            })
            return {'error': listingErrors}
        default: 
            return state
    }
}

export default listingErrorReducer