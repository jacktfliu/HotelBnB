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
        <div >
                <nav className='login-signup'>

                    <div className='home-link'>
                        <Link to='/' className='title'>HotelBnB</Link>
                    </div>

                    <div className='header'>
                        <button className='icon-button' onClick={this.handleClick}>
                                <i className="fas fa-grip-lines icon-large"></i>    
                                <i className="far fa-user-circle" ></i>
                        </button>

                        <div className='dropdwon'>
                            {
                                this.state.clicked ?(
                                this.props.currentUser ?
                                <div className='dropdown-content' onClick={this.handleClick}>
                                    <a>Welcome {this.props.currentUser.username}</a>
                                    <Link to='/listing/new'>Host</Link>
                                    <a onClick={() => this.props.logout()}>Log Out</a>
                                </div>
                                :
                                <div className='dropdown-content'>
                                    <a onClick={() => this.props.openModal('login')}>Log In</a>
                                    <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                                    <a onClick={() => this.props.login({username: 'DemoUser', password: 'DemoUser'})}>Demo User</a>
                                </div>
                            
                                ) : ''
                            }
                        </div>
                    </div>  
                </nav>
        </div>
        )
    }
    
}

export default NavBar 


