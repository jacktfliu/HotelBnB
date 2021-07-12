import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name:'',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demoUserSignin(demoUser){
      return e => {
        e.preventDefault()
        this.props.action(demoUser).then
        (() => {
          this.props.otherForm(demoUser).then(this.props.closeModal)
        })
      }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, j) => (
          <li key={`error-${j}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const demoUser = {
        username: 'DemoUser',
        password: 'DemoUser'
    }
    
    if (this.props.formType === 'Login'){
        return (
        <div>
            <form onSubmit={this.handleSubmit} className='login-form-box'>
              <div className='modal-content'>
                <div className='close-modal' onClick={this.props.closeModal}>&times;</div>
                <div className='modal-header'>
                  Welcome to HotelBnB!
                </div>

                <label>Username:
                    <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    />
                </label>

                <label>Password:
                    <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>

                <input className="session-button" type="submit" value={this.props.formType} />
                <div> Please {this.props.formType} or {this.props.otherForm}
                {this.renderErrors()}</div>
              </div>
            </form>
    </div>)
    } else {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className='modal-content'>
          <div className='close-modal' onClick={this.props.closeModal}>&times;</div>
            Welcome to HotelBnB!
            <div className="login-form">
              
              <label>Username:
                  <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  />
              </label>
              
              <label>Password:
                  <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </label>
              
              
              <label>Email:
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              
              
              <label>First Name:
                <input type="first_name"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="login-input"
                />
              </label>
              
              
              <label>Last Name:
                <input type="last_name"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="login-input"
                />
              </label>
              
              <input className="session-button" type="submit" value={this.props.formType} />
              <div>Please {this.props.formType} or {this.props.otherForm}
              {this.renderErrors()}</div>
            </div>
          </div>
        </form>
      </div>
      );
    }
  }
}
export default SessionForm;
