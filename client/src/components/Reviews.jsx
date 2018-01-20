import React from 'react';
import Review from './Review.jsx';

import axios from 'axios';

//business & username & userId
class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      reviews: [],
      friendReviews: [],
      strangerReviews: []
    }
  }

  componentDidMount() {
    this.props.userId ? this.getLoggedInReviews() : this.getLoggedOutReviews();
  }

  // if there is no logged in user will grab all reviews for the given business
  getLoggedOutReviews() {
    axios.get('/server/allreviews', {
      params: {
        businessId: this.props.business.id
      }
    })
    .then(response => {
      console.log(response);
      this.setState({reviews: response.data});
    }).catch(err => console.error(err));
  }

  // if the is a logged in user will grab all reviews with friends' reviews first
  getLoggedInReviews() {
    axios.get('/server/loggedreviews', {
      params: {
        businessId: this.props.business.id,
        loggedId: this.props.userId
      }
    })
    .then(response => {
      this.setState({friendReviews: response.data.friendReviews, strangerReviews: response.data.strangerReviews});
    }).catch(err => console.error(err));
  }

  renderFriendsReviews() {
    return (
      <div>
        What your friends say:
        <div className="friendReviews">
          <ul>
            {this.state.friendReviews.map(review => {
              return (
                <Review
                  review={review}
                  key={review.id}
                  logged={true}
                  friend={true}
                  businessId={this.props.business.id}
                  username={this.props.username}
                  userId={this.props.userId}/>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  renderStrangerReviews() {
    return (
      <div>
        What other people say:
        <div className="otherReviews">
          <ul>
            {this.state.strangerReviews.map(review => {
              return (
                <Review
                  review={review}
                  key={review.id}
                  logged={true}
                  friend={false}
                  businessId={this.props.business.id}
                  username={this.props.username}
                  userId={this.props.userId}/>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  renderLoggedReviews() {
    return (
      <div>
        {this.renderFriendsReviews()}
        {this.renderStrangerReviews()}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.username ? 
          this.renderLoggedReviews() :
          (<div>
            What people say:
            <div className="otherReviews">
              <ul>
                {this.state.reviews.map((review, index) => {
                  return (
                    <Review
                      review={review}
                      key={index}
                      logged={false}
                      friend={false}
                      businessId={this.props.business.id}
                      username={review.username}
                      userId={review.user_id}/>
                  )
                })}
              </ul>
            </div>
          </div>)
        }
      </div>
    )
  }

}

export default Reviews;
