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

const App = () => (
    <div>
      <ModalContainer/>
      <Route path='/' component={NavBarContainer}/>
      <Splash/>
    </div>
)

export default App