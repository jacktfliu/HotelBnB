import React from "react"
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SplashPage from './splash/splashpage'
import NavBarContainer from "./nav/navbar_container";
import ModalContainer from "./modal/modal_container";
import ListingIndexContainer from "./listing_index/listing_index_container";
import ListingShowContainer from './listing_show/listing_show_container'
import ListingFormContainer from './listing_form/listing_form_container'
import { Fragment } from "react";

const App = () => (
    <Fragment>
        <NavBarContainer/>
        <ModalContainer/>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path='/listings' component={ListingIndexContainer}/>
            <Route exact path='/listings/:listingId' component={ListingShowContainer}/>
            <Route exact path='listings/new' component={ListingFormContainer}/>
          </Switch>
    </Fragment>

)

export default App