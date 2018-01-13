import React from 'react';
import Search from './Search.jsx'
import BusinessInfo from './BusinessInfo.jsx';
import BusinessMap from './BusinessMap.jsx'
import PhotoFeed from './PhotoFeed.jsx';
import Reviews from './Reviews.jsx';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props)
  }

  getMap() {
    axios.get(`${googleAPI}details/json?reference=${businessRef}&key=${GOOGLE_API_KEY}`)
      .then(response => cb(response))
      .catch(error => console.log('error:', error))
    axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
      &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
      &markers=color:red%7Clabel:C%7C40.718217,-73.998284
      &key=YOUR_API_KEY`


    })
  }

  render() {
    return (
      <div className="businessPage">
        <Search getBusinesses={this.props.getBusinesses}/>
        <BusinessInfo business={this.props.business}/> 
        <div id="businessMap"><BusinessMap business={this.props.business}/></div>
        <PhotoFeed />
        <div className="reviews">
          <Reviews />  
        </div> 
        <div> 
        </div>
      </div>
    )
  }
}

export default BusinessPage;
