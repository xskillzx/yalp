import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: ''
    }
    this.formData = {
      name: '',
      email: '',
      username: '',
      password: ''
    };
  }

  getFormData(e) {
    e.preventDefault();
    this.formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.createUser(this.formData)
  }

  render() {
    return(
      <div>
        <Link to="/">
          <button type="Home">
            Go Back
          </button>
        </Link>
        <form onSubmit={ this.getFormData.bind(this) } >
<<<<<<< HEAD
          <input ref="name" className="name" type="text" placeholder="Name" />
          <input ref="email" className="email" type="text" placeholder="E-mail" />
          <input ref="username" className="username" type="text" placeholder="Username" />
          <input ref="password" className="password" type="password" placeholder="Password" />
=======
          <p>Name: <input ref="name" className="name" type="text" /></p>
          <p>E-mail: <input ref="email" className="email" type="text" /></p>
          <p>Username: <input ref="username" className="username" type="text" /></p>
          <p>Password: <input ref="password" className="password" type="password" /></p>
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
          <input className='submitCreateForm' type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}


<<<<<<< HEAD
export default Signup;
=======
export default Signup;
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
