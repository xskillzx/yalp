import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.backgroundSize = "100%";
  }

  render() {
    return (
      <div>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <br />
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <br />
        <Link to="/search">
          <button>Continue as guest</button>
        </Link>
      </div>
    )
  }
}

export default Home;
