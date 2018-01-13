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
