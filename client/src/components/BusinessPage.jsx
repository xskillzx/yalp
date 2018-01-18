import React from 'react';
import Search from './Search.jsx'
import BusinessInfo from './BusinessInfo.jsx';
import PhotoFeed from './PhotoFeed.jsx';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';
import FriendActivity from './FriendActivity.jsx';
import axios from 'axios';


class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {},
      friendReviews: [],
      nonFriendReviews: []
    }
    this.photos = [];
  }

  componentDidMount() {
    this.getBusinessInfo(this.props.businessPlaceId);
  }

  getBusinessInfo(businessId) {
    axios.get(`/server/business/${businessId}`)
    .then(resp => {
      this.photos = [];
      if (resp.data.photos) {
        resp.data.photos.map(photo => {
          this.getBusinessPhotos(photo.photo_reference, data => {
            this.setState({business: resp.data});
          });
        });
      } else {
        this.setState({business: resp.data, checkedIn: false});
        this.props.history.push(`/business/${resp.data.name}`);
      }
      this.setState({business: resp.data})
    })
    .catch(err => {
      console.error(err);
    });
  }

  getBusinessPhotos(photoRef, cb) {
    axios.get(`/server/business/photos/${photoRef}`)
    .then(resp => {
      this.photos.push(resp.data);
      cb();
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="businessPage">
        <div style={{cursor: 'pointer'}} onClick={e => this.props.history.goBack()} className="backBtn">{"<"} Search Results</div><br />
        <BusinessInfo business={this.state.business}/>
        {/* <div className="business-page-btns">
          <span>
            {
              this.props.checkedIn ?
              <button onClick={e => {this.props.checkIn(this.props.business)}} className="checkIn disabled">Checked In!</button> :
              <button onClick={e => {this.props.checkIn(this.props.business)}} className="checkIn">Check In</button>
            }
          </span>
          <span>
            {
              this.props.getFavoriteInfo(this.state.business.id) ?
              <button className="favoriteIn" onClick={e => {this.props.favoriteIn(this.props.business)}}>Unfavorite</button> :
              <button className="favoriteIn" onClick={e => {this.props.favoriteIn(this.props.business)}}>Favorite</button>
            }
          </span>
        </div> */}
        {/* <div className="addReview">
          <AddReview business={this.props.business} username={this.props.username} userId={this.props.userId} />
        </div> */}
        {/* <div className="reviews">
          <Reviews business={this.props.business} username={this.props.username} userId={this.props.userId} />
        </div> */}
        {/* <div className="friend-activity">
          <FriendActivity business={this.props.business} username={this.props.username} userId={this.props.userId}/>
        </div> */}
        {this.state.business.photos && this.photos.length === this.state.business.photos.length &&
        <div className="photoFeed">
          <PhotoFeed photos={this.photos} />
        </div>
        }
      </div>
    )
  }
}

export default BusinessPage;
