import React from 'react';
import axios from 'axios';

//props: review (userId, rating, text), businessId, username, userId
//need to get username from userId
class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      friend: false
    }
  }

  componentDidMount() {
    this.checkIfFriend();
    this.getUsernameOfReview();
  }

  getUsernameOfReview() {
    axios.get('/server/user', {
        params: {
          userId: this.props.review.user_id
        }
      })
      .then(response => {
        console.log('username response', response.data[0].username);
        this.setState({
          username: response.data[0].username
        })
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
  }

  checkIfFriend() {
    //check if the current review author is a friend
    axios.get('/server/checkfriend', {
        params: {
          userId: this.props.userId,
          friendId: this.props.review.user_id
        }
      })
      .then(response => {
        console.log('FRIEND:', response.data)
        if (response.data) {
          this.setState({ friend: true })
        }
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
  }

  addFriend() {
    //takes current user and review user and adds to friend list
    //props.review.userId == friend to be added
    axios.get('/server/addfriend', {
        params: {
          userId: this.props.userId,
          friendId: this.props.review.user_id
        }
      })
      .then(response => {
        console.log('Friend added:', this.state.username)
        this.setState({ friend: true })
      })
      .catch(err => {
        if (err) { console.log(err) }
      })
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
        <span className="review-author">{this.state.username}</span>
        <span>
          {this.state.friend ?
            <button className="friend-btn">Your Friend</button> :
            <button className="friend-btn" onClick={this.addFriend.bind(this)}>Add {this.state.username} as Friend</button>
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
