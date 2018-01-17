import React from 'react';
import ReactDOM from 'react-dom';
import BusinessEntry from './BusinessEntry.jsx';
import { Link } from 'react-router-dom';
import MapContainer from './GoogleMap.jsx';

class BusinessList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    document.body.style.background = "url('wood.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "repeat-y";
  }
  getBusinessEntries() {
    const { favorites } = this.props;
    return this.props.businesses.data.map(business => 
      <Link key={business.id} to={`/business/${business.id}`} onClick={(e) => this.props.updateBusiness(e, business)} style={{ textDecoration: 'none' }}>
      <BusinessEntry business={business}
                     key={business.id}
                     favorite={favorites[business.id] ? true : false} />
      </Link> 
    )
  }

  render() {
    return (
      <div>
        {this.getBusinessEntries()}
        <MapContainer style={} businesses={this.props.businesses.data}/>
      </div>
    )
  }
}

export default BusinessList;