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
        <div className='nav-bar'>
                <nav className='login-signup'>
                <div><Link to='/' className='home-link'>HotelBnB</Link></div>
                    <div className='icon-dropdown'>
                        <button className='icon' onClick={this.handleClick}>
                            <i className="fas fa-grip-lines" ></i>    
                            <i className="far fa-user-circle" ></i>
                        </button>
                        
                        {
                            this.state.clicked ?(
                            this.props.currentUser ?
                            <div id='dropdown-menu' onClick={this.handleClick}>
                                <p>Welcome {this.props.currentUser.username}</p>
                                <a className='logout' onClick={() => this.props.logout()}>Log Out</a>
                            </div>
                            :
                            <div id='dropdownbutton' >
                            <div className='dropdown'id='dropdown-menu' >
                                <a onClick={() => this.props.openModal('login')}>Log In</a>
                                <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                                <a onClick={() => this.props.login({username: 'DemoUser', password: 'DemoUser'})}>Demo User</a>
                            </div>
                            </div>
                        ) : ''
                        }
                    </div>  
                </nav>
        </div>
        )
    }
    
}

export default NavBar 


