import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Signup from './Signup.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Welcome to Yalp! </h1>
        Username: <input id="username" type="text" /><br />
        Password: <input id="password" type="password" /><br />
        <Link to="/login">
          <button type="Login">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button type="Signup">
            Signup
          </button>
        </Link>
      </div>
    )
  }
}

export default Home;