import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './Filters.jsx';
import BusinessEntry from './BusinessEntry.jsx';
import MapContainer from './GoogleMap.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      initLocation: {},
      filterBy: null,
      filteredResults: []
    };
  }
  componentWillMount() {
    document.body.style.background = "url('wood.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "repeat-y";
  }

  getBusinesses(search, loc = `(37.7749,-122.4194)`) {
    let url = `/server/search/${search}/${loc}`;
    axios.get(url)
    .then(resp => {
      this.setState({searchResults: resp.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    let obj = (this.props.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
    if (obj.location) {
      let locationStr = obj.location.slice(1, -1).replace('%20', '');
      let locationArr = locationStr.split(',');
      let locationObj = {lat: locationArr[0], lng: locationArr[1]};
      this.setState({initLocation: locationObj});
    }
    this.getBusinesses(obj.search, obj.location);
  }

  getBusinessEntries() {
    const { favorites } = this.props;
    return this.state.searchResults.map(business => 
      <BusinessEntry
        business={business}
        key={business.id}
      />
    );
  }

  handleFilter() {

  }

  render() {
    return (
      <div id="search-results">
        <div id="filters">
          <Filters handleFilter={this.handleFilter.bind(this)}/>
        </div>
        <div id="businesses&map">
          <div id="businesses">
            {this.getBusinessEntries()}
          </div>
          <div id="map-container">
            {this.state.searchResults.length > 0 && <MapContainer initLocation={this.state.initLocation.lat ? this.state.initLocation : {lat: '37.7749', lng: '-122.4194'}} businesses={this.state.searchResults}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessList;