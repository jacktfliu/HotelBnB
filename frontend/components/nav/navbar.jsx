import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
        
        this.handleClick = this.handleClick.bind(this)
        this.closeDropDown = this.closeDropDown.bind(this)
    }
    
   closeDropDown(){
       this.setState({clicked: false})
   }

   handleClick(e){
       e.preventDefault();
       this.setState({clicked: !this.state.clicked})
   }


    render(){
        return(
        <div className='navbar'>
            <nav className='login-signup'>
                <div className='home-link'>
                    <Link to='/' className='title'>HotelBnB</Link>
                </div>
                <div class='links'>
                    <a href='https://github.com/jacktfliu/HotelBnB'><i className="fab fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/jack-l-338a09141/'><i className="fab fa-linkedin"></i></a>
                    <a href='https://angel.co/u/jack-liu-43'><i className="fab fa-angellist"></i></a>
                </div>
                <div className='header'>
                    <button className='icon-button' onClick={this.handleClick}>
                            <div className='icon1'>
                                <i className="fas fa-grip-lines icon-large"></i>    
                            </div>
                            <div className='icon2'>
                                <i className="far fa-user-circle" ></i>
                            </div>
                            <div className='dropdown'>
                                {
                                    this.state.clicked ?(
                                    this.props.currentUser ?
                                    <div className='dropdown-content1' onClick={this.handleClick}>
                                        <ul className='drop-down-inside'>Welcome {this.props.currentUser.username}</ul>
                                        <Link className='drop-down-inside' to='/listing/new'>Host</Link>
                                        <Link className='drop-down-inside' to='/reservations'>Reservations</Link>
                                        <ul className='drop-down-inside' onClick={() => this.props.logout()}>Log Out</ul>
                                    </div>
                                    :
                                    <div className='dropdown-content'>
                                        <ul className='drop-down-inside' onClick={() => this.props.openModal('login')}>Log In</ul>
                                        <ul className='drop-down-inside' onClick={() => this.props.openModal('signup')}>Sign Up</ul>
                                        <ul className='drop-down-inside' onClick={() => this.props.login({username: 'DemoUser', password: 'DemoUser'})}>Demo User</ul>
                                    </div>
                                
                                    ) : ''
                                }
                            </div>
                    </button>
                </div>
            </nav>
        </div>
        )
    }
    
}

export default NavBar 


