import React from "react"
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './splash/splashpage'
import NavBarContainer from "./nav/navbar_container";
import ModalContainer from "./modal/modal_container";
import ListingShowContainer from './listings/listing_show_container'
import ListingFormConatiner from './listings/listing_form_container'

const App = () => (
    <div>
      <ModalContainer/>
      <Switch>
        <Route path='/' component={NavBarContainer}/>
        <Route path='/listings/show' component={ListingShowContainer}/>
        <Route path='/listings/new' component={ListingFormConatiner}/>
      </Switch>
        <Splash/>
    </div>
)

export default App