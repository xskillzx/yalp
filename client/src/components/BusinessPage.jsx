import React from 'react';
import Search from './Search.jsx'
import BusinessInfo from './BusinessInfo.jsx';
import BusinessMap from './BusinessMap.jsx'
import PhotoFeed from './PhotoFeed.jsx';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';
import FriendActivity from './FriendActivity.jsx';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendReviews: [],
      nonFriendReviews: []
    }
  }

  render() {
    console.log(this.props.getFavoriteInfo(this.props.business.id));
    return (
      <div className="businessPage">
        <Search getBusinesses={this.props.getBusinesses}/>
        <BusinessInfo business={this.props.business}/>
        {this.props.checkedIn ? <button className="checkIn">Checked In!</button> : <button className="checkIn" onClick={() => this.props.checkIn(this.props.business)}>Check In</button>}
        {this.props.checkedIn ? <div onClick={e => {this.props.checkIn(this.props.business)}} className="checkIn">Already Checked In!</div> :
          <div onClick={e => {this.props.checkIn(this.props.business)}} className="checkIn">Check In</div> }
        <div>
          {
            this.props.getFavoriteInfo(this.props.business.id) ? 
            <button className="favoriteIn disabled">Favorited</button>
            : <button className="favoriteIn" onClick={e => {this.props.favoriteIn(this.props.business)}}>Favorite</button>
          }
        </div>
        <div className="addReview">
          <AddReview business={this.props.business} username={this.props.username} userId={this.props.userId} />
        </div>
        <div className="reviews">
          <Reviews business={this.props.business} username={this.props.username} userId={this.props.userId} />
        </div>
        <div id="friend-activity">
          <FriendActivity business={this.props.business} username={this.props.username} userId={this.props.userId}/>
        </div>
        <div className="photoFeed">
          <PhotoFeed photos={this.props.photos} />
        </div>
      </div>
    )
  }
}

export default BusinessPage;
