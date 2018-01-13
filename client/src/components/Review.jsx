import React from 'react';

//props: review (userId, rating, text), businessId, username, userId
//need to get username from userId
class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  getUsernameOfReview() {

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
        <div className="review-author"></div>
        <div className="review-rating">{imgArr}</div>
        <div className="review-text">{this.props.review.text}</div>
      </div>
    )
  }
}

export default Review;
