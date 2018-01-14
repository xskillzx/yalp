import React from 'react';
import FriendActivityEntry from './FriendActivityEntry.jsx';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

//business obj, username, userId

class FriendActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendCheckins: [],
      activities: [
        {
          id: 0,
          username: 'peter',
          createdAt: '2018-01-13 13:08:42',
          timeAgo: ''
        },
        {
          id: 1,
          username: 'christopher',
          createdAt: '2018-01-13 13:08:42',
          timeAgo: ''
        },
        {
          id: 2,
          username: 'kaykay',
          createdAt: '2018-01-13 13:08:42',
          timeAgo: ''
        },
        {
          id: 2,
          username: 'concon',
          createdAt: '2018-01-13 13:08:42',
          timeAgo: ''
        }
      ]
    };
    TimeAgo.locale(en);
  }

  createDate(createdAt) {
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(new Date(createdAt));
  }

  getFriendActivityEntries() {
    const { activities } = this.state;
    if (activities.length) {
      return activities.map((activity) => {
        const { id } = activity;
        activity.timeAgo = this.createDate(activity.createdAt);
        return <FriendActivityEntry key={id} activity={activity}/>
      });
    }
    return '';
  }

  getFriendCheckins() {
    // use userId and businessId to get all checkins
    // query for username & createdAt for that business
    // update friendCheckins state (friend username, createdAt)

    // update ul below 
  }

  render() {
    return (
      <div>
        <div className="activity-header">Your Friends' Recent Activity...</div>
        <div className="check-in-header">Check-ins:</div>
        <ul>{this.getFriendActivityEntries()}</ul>
      </div>
    );
  }
}

export default FriendActivity;
