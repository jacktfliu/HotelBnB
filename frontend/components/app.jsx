import React from "react"
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import SplashPageIndexContainer from './splash/splash_page_container'
import NavBarContainer from "./nav/navbar_container";
import Modal from "./modal/modal";
import ListingIndexContainer from "./listing_index/listing_index_container";
import ListingShowContainer from './listing_show/listing_show_container'
import CreateFormContainer from './listing_form/create_form_container'
import EditFormContainer from './listing_form/edit_form_containter'
import ReservationPageContainer from './reservation/reservation_page_container'
import { Fragment } from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <Fragment>
        <NavBarContainer/>
        <Modal/>
          <Switch>
            <Route exact path="/" component={SplashPageIndexContainer} />
            <Route exact path='/listings' component={ListingIndexContainer}/>
            <Route exact path='`/listings/${location}`' component={ListingIndexContainer}/>
            <Route exact path='/listings/:listingId' component={ListingShowContainer}/>
            <ProtectedRoute path='/listing/new' component={CreateFormContainer}/>
            <ProtectedRoute path='/listings/:listingId/edit' component={EditFormContainer}/>
            <ProtectedRoute path='/reservations' component={ReservationPageContainer}/>
          </Switch>
    </Fragment>

)

export default App