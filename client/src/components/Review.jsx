import React from 'react';
import axios from 'axios';

//props: review (userId, rating, text), businessId, username, userId
//need to get username from userId
class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friend: props.friend,
      pending: false
    }
  }

  getUsernameOfReview() {
    axios.get('/server/user', {
        params: {
          userId: this.props.review.user_id
        }
      })
      .then(response => {
        this.setState({
          username: response.data[0].username
        })
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
  }

  addFriend() {
    // if the request fails i still want to set pending true, because it will fail if the request is already pending
    this.setState({pending: true});
    axios.get('/server/addfriend', {
      params: {
        sender_id: this.props.userId,
        receiver_id: this.props.review.user_id
      }
    })
    .then(response => {
      // nothing to do with this honestly
    })
    .catch(err => console.error(err));
  }

  render() {
    let imgArr = [];
    for (let i = 0; i < this.props.review.rating; i++) {
      imgArr.push(
        (<img className="ratingLogo" key={i} src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>)
      )
    }
    return (
      <div className="review">
        <span className="review-author">{this.props.review.name}</span><br/>
        <span className="review-author">@{this.props.review.username}</span>
        <span>
          {!this.props.logged ?
            null :
            !this.state.friend && !this.state.pending ?
              this.props.review.user_id === this.props.userId ? 
                <span className="review-author" style={{float: "right"}}>This is you</span> :
                <button className="friend-btn" onClick={this.addFriend.bind(this)}>Add as Friend</button> 
              :
              this.state.pending ? <span className="friend-btn" style={{float: "right"}}>Request pending</span> :
              <span className="friend-btn" style={{float: "right"}}>Is your friend</span>
          }
        </span>
        <div className="review-rating">{imgArr}</div>
        <div className="review-date">{this.props.review.createdAt}</div>
        <div className="review-text">{this.props.review.text}</div>
      </div>
    )
  }
}

export default Review;
