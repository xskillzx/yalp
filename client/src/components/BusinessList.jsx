import React from 'react';
import ReactDOM from 'react-dom';
import BusinessEntry from './BusinessEntry.jsx';
import { Link } from 'react-router-dom';
import MapContainer from './GoogleMap.jsx';
import axios from 'axios';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: []};
  }
  componentWillMount() {
    document.body.style.background = "url('wood.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "repeat-y";
  }

  getBusinesses(search) {
    axios.get(`/server/search/${search}`)
    .then(resp => {
      console.log(resp);
      this.setState({searchResults: resp.data});
    }).catch(err => console.error(err));
  }

  componentDidMount() {
    let searchQuery = this.props.location.search.slice(8);
    this.getBusinesses(searchQuery);
  }

  getBusinessEntries() {
    const { favorites } = this.props;
    return this.state.searchResults.map(business => 
      <Link key={business.id} to={`/business/${business.id}`} onClick={(e) => this.props.updateBusiness(e, business)} style={{ textDecoration: 'none' }}>
      <BusinessEntry business={business}
                     key={business.id}
                     favorite={favorites[business.id] ? true : false} />
      </Link> 
    )
  }

  render() {
    return (
      <div id="businesses&map">
        <div id="businesses">
          {this.getBusinessEntries()}
        </div>
        <div id="map-container">
          <MapContainer businesses={this.props.businesses.data}/>
        </div>
      </div>
    )
  }
}

export default BusinessList;