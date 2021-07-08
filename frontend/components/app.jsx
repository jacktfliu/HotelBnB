import React from "react"
import { Provider } from 'react-redux';
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
import { Fragment } from "react";

const App = () => (
    <Fragment>
        <NavBarContainer/>
        <ModalContainer/>
      <Switch>
        {/* <Route exact path='/listings/:listingId' component={ListingIndexContainer}/> */}
        <Route exact path="/" component={SplashPage} />
      </Switch>
    </Fragment>
)

export default App