import React from 'react';

class FriendActivityEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, timeAgo } = this.props.activity;
    return (
      <div>
        <span className="activity-user">{username}</span>
        <span className="activity-time">{timeAgo}</span>
      </div>
    )
  }
}

export default FriendActivityEntry;
