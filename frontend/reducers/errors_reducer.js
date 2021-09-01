import {combineReducers} from 'redux'
import sessionErrorReducer from './sessions_errors_reducers'
import listingErrorReducer from './listings_error_reducer'
import reviewErrorReducer from './review_error_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    listing: listingErrorReducer,
    review: reviewErrorReducer
})

export default errorsReducer