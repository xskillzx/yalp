import React from 'react';

const BusinessInfo = (props) => {
  let imgArr = [];
  const starTotal = 5;
  const starPercentage = (props.business.rating / starTotal) * 100;
  const starPercentageRounded = (Math.round(starPercentage / 10) * 10);
  const fullStars = Math.floor(starPercentageRounded / 20);
  const halfStar = starPercentageRounded % 20 === 10 ? 1 : 0 
  const emptyStars = 5 - fullStars - halfStar;
  
  for (let i = 0; i < fullStars; i++) {
    imgArr.push(
      (<i class="fa fa-star" aria-hidden="true"></i>)
    )
  }
  if (halfStar === 1) {
    imgArr.push(
      (<i class="fa fa-star-half-o" aria-hidden="true"></i>)
    )
  }
  for(let i = 0; i < emptyStars; i++) {
    imgArr.push(
      (<i class="fa fa-star-o" aria-hidden="true"></i>)
    )
  }
  

  return (
    <div className="businessInfo">
      <div className="businessTitle">{props.business.name}</div>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr className="GoogleRating">
            <td>Google:</td>
            <td>{imgArr}</td>
          </tr>
          <tr className="YalpRating">
            <td>Yalp:</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div>{props.business.formatted_address}</div>
      <div>{props.business.formatted_phone_number}</div>
      <a href={props.business.website} >{props.business.website}</a>
    </div>
  )
}

export default BusinessInfo;


