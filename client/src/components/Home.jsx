import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getBusinesses(search) {
    console.log('click')
    axios.get('/search')
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Link to="/login">
          <button type="Login" id="login-btn">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button type="Signup" id="signup-btn">
            Sign Up
          </button>
        </Link>
      </div>
    )
  }
}

export default Home;
