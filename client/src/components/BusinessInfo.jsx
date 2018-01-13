import React from 'react';

const BusinessInfo = (props) => {
  console.log(props.business);
  let imgArr = [];
  for (let i = 0; i < props.business.rating; i++) {
    imgArr.push(
      (<img className="ratingLogo" key={i} src='https://image.ibb.co/bzkXSR/imageedit_12_7791151374.png' width='20px'/>)
    )
  }
  return (
    <div className="businessInfo">
      <div>{props.business.name}</div>
      <div className="rating">{imgArr}</div>
      <div>{props.business.formatted_address}</div>
      <div>{props.business.formatted_phone_number}</div>
      <div>{props.business.website}</div>
    </div>
  )
}

export default BusinessInfo;
