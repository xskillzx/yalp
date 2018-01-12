import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
  render() {
    return (
      <div>
        <Link to="/login">
          <button type="Login" id="login-btn">
=======
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
        <h1> Welcome to Yalp! </h1>
        <Search getBusinesses={this.getBusinesses.bind(this)} />
        <Link to="/login">
          <button type="Login">
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
            Log In
          </button>
        </Link>
        <Link to="/signup">
<<<<<<< HEAD
          <button type="Signup" id="signup-btn">
            Sign Up
=======
          <button type="Signup">
            New User?
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
          </button>
        </Link>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
