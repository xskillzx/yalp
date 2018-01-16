import React from 'react';
import Review from './Review.jsx';

import axios from 'axios';

//business & username & userId
class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      friendReviews: [],
      otherReviews: []
    }
  }

  componentDidMount() {
    this.getFriendReviews();
    this.getOtherReviews();
  }

  getFriendReviews() {
    //need userId
    axios.get('/server/reviews/friends', {
      params: {
        userId: this.props.userId,
        businessId: this.props.business.id
      }
    })
      .then(response => {
        console.log('FRIEND REVIEWS:', response.data);
        this.setState({
          friendReviews: response.data
        })
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
  }

  getOtherReviews() {
    axios.get('/server/reviews/others', {
      params: {
        userId: this.props.userId,
        businessId: this.props.business.id
      }
    })
      .then(response => {
        console.log('OTHER REVIEWS:', response.data);
        this.setState({ otherReviews: response.data })
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
  }

  render() {
    return (
      <div>
        Top Reviews
        <div className="friendReviews">
          <ul>
            {this.state.friendReviews.map((review, index) => {
              return (
                <Review
                  review={review}
                  key={index}
                  businessId={this.props.business.id}
                  username={this.props.username}
                  userId={this.props.userId}/>
              )
            })}
          </ul>
        </div>
        <div className="otherReviews">
          <ul>
            {this.state.otherReviews.map((review, index) => {
              return (
                <Review
                  review={review}
                  key={index}
                  businessId={this.props.business.id}
                  username={this.props.username}
                  userId={this.props.userId}/>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

}

export default Reviews;
