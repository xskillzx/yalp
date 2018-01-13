import React from 'react';
import axios from 'axios';

//props.businessId = business ID

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      text: '',
      reviewed: false
    }
    this.updateRating = this.updateRating.bind(this);
    this.updateReviewText = this.updateReviewText.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  updateRating(val) {
    this.setState({ rating: val })
  }
  updateReviewText(e) {
    this.setState({ text: e.target.value })
  }
  submitReview() {
    this.setState({ reviewed: true }) //rerender comp to thank you
    //add review to db (user, rating, text, business)
    //TODO: check text appropriateness before submitting
    if (this.state.text.length) {
      console.log('submitting review')
      axios.post('/review', {
        rating: this.state.rating,
        text: this.state.text,
        userID: this.props.userId,
        businessID: this.props.business.id
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  }

  render() {
    if (this.state.reviewed) {
      return (
        <div>Thanks for leaving a review!</div>
      )
    } else {
      return (
        <div>
          <div>Leave a Review</div>
          <button className="rate-btn" onClick={() => this.updateRating(5)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={() => this.updateRating(4)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={() => this.updateRating(3)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={() => this.updateRating(2)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={() => this.updateRating(1)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <textarea className="new-review-text" type="text" placeholder="What'd you think?" onChange={this.updateReviewText}></textarea>
          <button className="review-submit" onClick={this.submitReview}>Submit</button>
        </div>
      )
    }
  }
}


export default AddReview;
