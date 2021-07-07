import React from 'react'
import {Link} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props){
        super(props)
    }

    dropDown(e) {
        if (!e.target.closest(".dropdown-menu") && !e.target.closest(".home-link")) {
            document.querySelector(".dropdown-menu").style.display = 'none'
            document.removeEventListener("click", this.dropDownEvent)
        }
    }
    
    toggleDropDown(){
        const drop = document.getElementById('dropdownmenu')
        if (drop.style.display !== 'flex'){
            drop.style.display = 'flex'
            document.addEventListener('click', this.dropDown)
        } else {
            drop.style.display = 'none'
            document.removeEventListener('click', this.dropDown)
        }
    }

    render(){
        console.log(this.props)
        return(
        <div>
            <nav className='login-signup'>
           <Link to='/' className='home-link'>HotelBnB</Link>
            <div className='icon-dropdown'>
            <button className='icon' onClick={this.toggleDropDown.bind(this)}><i className="fas fa-grip-lines" ></i>    
                <i className="far fa-user-circle" ></i>
                </button>
                <div className='dropdownbutton' id='dropdownmenu'>
                    <div className='dropdown'id='dropdown-menu'>
                        <a onClick={() => this.props.openModal('login')}>Log In</a>
                        <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                        <a onClick={() => this.demoUser(user)}>Demo User</a>
                    </div>
                </div>
            </div>  
            </nav>
        </div>
        )
    }
    
}

export default NavBar 