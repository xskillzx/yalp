import React from 'react';
import Search from './Search.jsx'
import BusinessInfo from './BusinessInfo.jsx';
import BusinessMap from './BusinessMap.jsx'
import PhotoFeed from './PhotoFeed.jsx';
import Reviews from './Reviews.jsx';
import config from '../../../config.js'

class BusinessPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapData: {}
    }
  }

  componendDidMount() {
    getMap(this.props.business.geometry.location);
  }

  getMap(location, cb) {
  axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.lat}, ${location.lng}
    &key=${config.GOOGLE_API_KEY}`
  )
    .then(response => console.log(response) )
    .catch(error => console.log('error:', error))
  }

  render() {
    return (
      <div className="businessPage">
        <Search getBusinesses={this.props.getBusinesses}/>
        <BusinessInfo business={this.props.business}/> 
        
        <div onClick={e => {this.props.checkIn(this.props.business)}} className="checkIn">Check In</div>
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
