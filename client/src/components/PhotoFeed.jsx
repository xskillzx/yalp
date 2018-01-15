import React from 'react';

const PhotoFeed = (props) => {
  return (
    props.photos.map(photo => (
        <img className="business-photo" src={photo} key={photo}/>
    ))
  )
}

export default PhotoFeed;
