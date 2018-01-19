import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.formData = {
      username: '',
      password: ''
    }
  }

  getFormData(e) {
    e.preventDefault();
    this.formData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.loginUser(this.formData)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.getFormData(e);
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <form onSubmit={ this.getFormData.bind(this) }>
          <input ref="username" id="username" type="text" placeholder="Username" autoFocus/>
          <input ref="password" id="password" type="password" placeholder="Password" onKeyPress={this.handleKeyPress.bind(this)}/>
          <input style={{cursor: 'pointer'}} type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}


export default Login;
