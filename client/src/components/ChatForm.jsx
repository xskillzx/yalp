import React from 'react';
import axios from 'axios';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      msgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.chatData = {
    //   name: this.refs.name.value,
    //   email: this.refs.email.value,
    //   username: this.refs.username.value,
    //   password: this.refs.password.value
    // }
  }

  componentDidMount() {
    this.getChat();
  }

  sendMessage(text) {
    // sdfsd
  }

  getChat() {
    let chatData = {
      user1: JSON.parse(localStorage.getItem('loggedUser')).id,
      user2: this.props.friend.id
    }

    axios.post('/server/dm/log', chatData)
      .then(resp => {
        if (resp.status === 201) {
          console.log('Msg sent!');
          console.log(resp);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.value} onChange={this.handleChange} id="m" autoComplete="off" className="dm-input" placeholder="Hungry? Form a Squad and grab a bite!" required/>
        <button >Send</button>
      </form>
    );
  }
}

export default ChatForm;