import React from "react"
import { Provider } from 'react-redux';
import SessionForm from "./session_form/session_form";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from "./nav/navbar";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container'

const App = () => (
    <div>
        <NavBar/>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
)

export default App