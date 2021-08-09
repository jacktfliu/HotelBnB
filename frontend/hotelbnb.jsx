import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'
import {login, logout, signup} from './actions/session_actions'
import {fetchListings} from './actions/listing_action'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
    const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
            users: { [window.currentUser.id]: window.currentUser }
        }
    };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.login = login
    window.logout = logout
    window.signup = signup
    window.store = store
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchListings = fetchListings;
    

    
    ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})


