import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    handleSubmit(){

    }

    render(){
        return(
        <div>
            <nav className='login-signup'>
            <div><h1>HotelBnB</h1></div>
            <button onClick={() =>  }></button>
            </nav>

            {/* <hgroup className='header-group'>
                 <h1 className='header-name'>Welcome, {this.props.currentUser.username}!</h1>
                 <button className='header-button' onClick={this.props.logout}>Log out</button>
            </hgroup> */}

        </div>
        )
    }
    
    
    // sessionLinks = () => (
    //     <nav className='login-signup'>
    //     <div><h1>HotelBnB</h1></div>
    //     <ul class='dropdown'>
    //         <li>Sign Up</li>
    //         <li>Login</li>
    //     </ul>
    //     </nav>
    // )

    // usernavBar = () => (
    //     <hgroup className='header-group'>
    //         <h1 className='header-name'>Welcome, {props.currentUser.username}!</h1>
    //         <button className='header-button' onClick={props.logout}>Log out</button>
    //     </hgroup>
    // )

    // return (props.currentUser ? usernavBar() : sessionLinks())
}

export default NavBar 