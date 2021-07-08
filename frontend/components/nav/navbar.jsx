import React from 'react'
import {Link} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.toggleDropDown = this.toggleDropDown.bind(this)
        
    }
    
    toggleDropDown(){
        const drop = document.getElementById('dropdown-menu')
        if (drop.style.display != 'flex'){
            drop.style.display = 'flex'
        } else {
            drop.style.display = 'none'
        }
    }


    render(){

        return(
        <div>
            <nav className='login-signup'>
                <div>
                    <Link to='/' className='home-link'>HotelBnB</Link>
                </div>


                <div>
                    <Link className='personal-link'>Github</Link>
                    <Link className='personal-link'>LinkedIn</Link>
                    <Link className='personal-link'>About Me</Link>
                </div>

                <div className='icon-dropdown'>

                    <button className='icon' onClick={this.toggleDropDown}>
                        <i className="fas fa-grip-lines" ></i>    
                        <i className="far fa-user-circle" ></i>
                    </button>

                    {this.props.currentUser ?
                        <div id='dropdown-menu'>
                            <p>Welcome {this.props.currentUser.username}</p>
                            <a className='logout' onClick={() => this.props.logout()}>Log Out</a>
                        </div>
                    :
                    <div id='dropdownbutton'>
                        <div className='dropdown'id='dropdown-menu'>
                            <a onClick={() => this.props.openModal('login')}>Log In</a>
                            <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                            <a onClick={() => this.props.login({username: 'DemoUser', password: 'DemoUser'})}>Demo User</a>
                        </div>
                    </div>
                    }   
                </div>  
            </nav>
        </div>
        )
    }
    
}

export default NavBar 