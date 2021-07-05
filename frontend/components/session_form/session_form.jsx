import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name:'',
            email: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updateFirstName = this.updateFirstName.bind(this)
        this.updateLastName = this.updateLastName.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    updateUsername(e){
        this.setState({username: e.target.value})
    }

    updatePassword(e){
        this.setState({password: e.target.value})
    }

    updateFirstName(e){
        this.setState({first_name: e.target.value})
    }

    updateLastName(e){
        this.setState({last_name: e.target.value})
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }

    renderErrors(e){
        const {errors} = this.props
        return(
            <>
                {errors.map((error, j) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </>
        )
    }

    render(){
        const signUpForm = () => {
            return(
                <>
                 <br/>
                        <label>
                            First Name:
                            <input type='text'
                                value={this.state.first_name}
                                onChange={this.updateFirstName}
                                className='login-input'
                                />
                        </label>
                    <br/>

                    <br/>
                        <label>
                            Last Name:
                            <input type='text'
                                value={this.state.last_name}
                                onChange={this.updateLastName}
                                className='login-input'
                                />
                        </label>
                    <br/>

                    <br/>
                        <label>
                            Email:
                            <input type='text'
                                value={this.state.email}
                                onChange={this.updateEmail}
                                className='login-input'
                                />
                        </label>
                    <br/>
                </>
            )
        }


        return(
            
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                Welcome to HotelBnb!
                    <br/>
                    <div className='login-form'>
                        <label>
                            Username:
                            <input type='text'
                                value={this.state.username}
                                onChange={this.updateUsername}
                                className='login-input'
                            />
                        </label>
                    <br/>

                    <br/>
                        <label>
                            Password:
                            <input type='text'
                                value={this.state.password}
                                onChange={this.updatePassword}
                                className='login-input'
                                />
                        </label>
                    <br/>

                {this.props.formType === 'signup' ? signUpForm() : ''}

                    </div>
                <input className='session-submit' type='submit' value={this.props.formType}/>
                </form>

            </div>
        )
    }
}

export default SessionForm