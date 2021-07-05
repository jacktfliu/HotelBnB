import React from 'react'
import {Link} from 'react-router-dom'

const Greeting = ( props ) => {
    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign up</Link>
        </nav>
    )

    const userGreeting = () => (
        <hgroup className='header-group'>
            <h1 className='header-name'>Welcome, {props.currentUser.username}!</h1>
            <button className='header-button' onClick={props.logout}>Log out</button>
        </hgroup>
    )

    return props.currentUser ? userGreeting() : sessionLinks()
}

export default Greeting 