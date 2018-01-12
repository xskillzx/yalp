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

  render() {
    return(
      <div>
        <Link to="/">
          <button type="Home">
            Go Back
          </button>
        </Link>
        <form onSubmit={ this.getFormData.bind(this) }>
<<<<<<< HEAD
          <input ref="username" id="username" type="text" placeholder="Username" />
          <input ref="password" id="password" type="password" placeholder="Password" />
=======
          <p>Username: <input ref="username" id="username" type="text" /></p>
          <p>Password: <input ref="password" id="password" type="password" /></p>
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}


<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
