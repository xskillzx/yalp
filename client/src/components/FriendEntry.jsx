import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';


const renderButtons = (id, is_pending, is_receiver, deleteHandler, acceptHandler) => {
  if (is_pending && is_receiver) {
    return (
      <div>
        <button onClick={e => acceptHandler(id)}>Accept</button>
        <button onClick={e => deleteHandler(id)}>No thx bro</button>
      </div>
    );
  }
  if (is_pending) {
    return <button onClick={e => deleteHandler(id)}>Cancel request</button>;
  }
  return <button onClick={e => deleteHandler(id)}>Remove friend</button>;
};

const FriendEntry = ({ id, name, email, username, createdAt, is_pending, is_receiver, deleteHandler, acceptHandler }) => {
  TimeAgo.locale(en);
  return (
    <div>
      <div>{name}</div>
      <div>@{username}</div>
      <div>{email}</div>
      <div>Member since: {(new TimeAgo('en-US').format(new Date(createdAt)))}</div>
      {renderButtons(id, is_pending, is_receiver, deleteHandler, acceptHandler)}
    </div>
  );
};

export default FriendEntry;