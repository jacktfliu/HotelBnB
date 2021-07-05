import {combineReducers} from 'redux'
import sessionErrorReducer from './sessions_errors_reducers'

const errorsReducer = combineReducers({
    session: sessionErrorReducer
})

export default errorsReducer