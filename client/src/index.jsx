import React from 'react';
import ReactDOM from 'react-dom';

import SignUp from './components/SignUp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SignUp />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
