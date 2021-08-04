import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import reviewsReducer from './reviews_reducer'
import reservationsReducer from './reservations_reducer'

const entitiesReducers = combineReducers({
    reviews: reviewsReducer,
    users: usersReducer,
    listings: listingsReducer,
    reservations: reservationsReducer,
})

export default entitiesReducers