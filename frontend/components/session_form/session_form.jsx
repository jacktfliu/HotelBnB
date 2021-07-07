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
    
    if (this.props.formType === 'login'){
        return (
        <div>
            <form onSubmit={this.handleSubmit} className='login-form-box'>
                Welcome to HotelBnB!
                 Please {this.props.formType} or {this.props.otherForm}
                 {this.renderErrors()}
                <br/>
                <label>Username:
                    <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    />
                </label>
                <br/>
                <label>Password:
                    <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
            </form>
    </div>)
    } else {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to HotelBnB!
          <br/>
          Please {this.props.formType} or {this.props.otherForm}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Password:
                <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <br/>
            <label>Email:
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
                  <br/>
            <label>First Name:
              <input type="first_name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
              />
            </label>
            <br/>
                  <br/>
            <label>Last Name:
              <input type="last_name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
      );
    }
  }
}
export default SessionForm;
