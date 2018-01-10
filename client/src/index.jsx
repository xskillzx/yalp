import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="sign-up">
        Sign-Up:
        <form>
          <input type="text" name="firstname" placeholder="First Name" autoFocus/>
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <input type="submit" value="Submit">Sign-Up</input>
        </form>
      </div>
    )
  }
}


export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
