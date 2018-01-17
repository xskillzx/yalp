import React from 'react';
import FriendEntry from './FriendEntry.jsx';
import axios from 'axios';


class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends
    }
  }

  clickDelete(userId) {
    let loggedUserId = this.props.userId;
    let newFriends = [];
    axios.get(`/server/removefriend?userId=${loggedUserId}&userId2=${userId}`)
    .then(response => {
      this.state.friends.forEach(friend => {
        if (friend.id !== userId) {
          newFriends.push(friend);
        }
      });
      this.setState({ friends: newFriends })
    }).catch(err => console.error(err));
  }

  clickAcceptPending(userId) {
    let loggedUserId = this.props.userId;
    axios.get(`/server/acceptfriend?sender_id=${userId}&receiver_id=${loggedUserId}`)
    .then(response => {
      let dupedFriends = this.state.friends.slice();
      let foundIndex = null;
      let newModifiedFriend = Object.assign(this.state.friends.find((friend, index) => {
        if (friend.id === userId) {
          foundIndex = index;
          return true;
        }
        return false;
      }));
      newModifiedFriend.is_pending = 0;
      dupedFriends[foundIndex] = newModifiedFriend;
      this.setState({ friends: dupedFriends });
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="friendList">
        {this.state.friends.map(friend => <FriendEntry key={friend.id} {...friend} deleteHandler={this.clickDelete.bind(this)} acceptHandler={this.clickAcceptPending.bind(this)}/>)}
      </div>
    );
  }
};


export default FriendList;