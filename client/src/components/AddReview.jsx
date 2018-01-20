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

  updateRating(val, e) {
    // console.log(this.lastSelectedRating)
    // if (this.lastSelectedRating) {
    //   console.log('found last rating element', this.lastSelectedRating)
    //   this.lastSelectedRating.style.background = 'red';
    // }
    // this.lastSelectedRating = e.currentTarget;
    //  if (e.currentTarget.style.background === 'yellow') {
    //   e.currentTarget.style.background = 'red';
    //   for (let i = 0; i < e.currentTarget.children.length; i++) {
    //     e.currentTarget.children[i].background = 'red';
    //   }
    //  } else {
    //   e.currentTarget.style.background = 'yellow';
    //   for (let j = 0; j < e.currentTarget.children.length; j++) {
    //     e.currentTarget.children[j].background = 'yellow';
    //   }
    //  }
    this.setState({ rating: val })
  }
  updateReviewText(e) {
    this.setState({ text: e.target.value })
  }
  submitReview() {
    //add review to db (user, rating, text, business)
    //TODO: check text appropriateness before submitting
    if (this.state.text.length) {
      axios.post('/review', {
        rating: this.state.rating,
        text: this.state.text,
        userID: this.props.userId,
        businessID: this.props.business.id
      })
      .then(response => {
        this.setState({reviewed: true}); //rerender comp to thank you
      })
      .catch(error => {
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
          {/* <button className="rate-btn" onClick={e => this.updateRating(5, e)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={e => this.updateRating(4, e)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={e => this.updateRating(3, e)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={e => this.updateRating(2, e)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button>
          <button className="rate-btn" onClick={e => this.updateRating(1, e)}>
            <img className="ratingLogo" src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>
          </button> */}
          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5"  onClick={e => this.updateRating(5, e)}/><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name="rating" value="4 and a half"  onClick={e => this.updateRating(4.5, e)}/><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4"  onClick={e => this.updateRating(4, e)}/><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name="rating" value="3 and a half"  onClick={e => this.updateRating(3.5, e)}/><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name="rating" value="3"  onClick={e => this.updateRating(3, e)}/><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name="rating" value="2 and a half"  onClick={e => this.updateRating(2.5, e)}/><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name="rating" value="2"  onClick={e => this.updateRating(2, e)}/><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name="rating" value="1 and a half"  onClick={e => this.updateRating(1.5, e)}/><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name="rating" value="1"  onClick={e => this.updateRating(1, e)}/><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="rating" value="half"  onClick={e => this.updateRating(0.5, e)}/><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
          </fieldset>
          <textarea className="new-review-text" type="text" placeholder="What'd you think?" onChange={this.updateReviewText}></textarea>
          <button className="review-submit" onClick={this.submitReview}>Submit</button>
        </div>
      )
    }
  }
}


export default AddReview;
