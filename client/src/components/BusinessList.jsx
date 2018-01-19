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
      filterBy: 'clear',
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
      this.setState({searchResults: resp.data, filteredResults: resp.data });
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
    return this.state.filteredResults.map(business => {
      return (<BusinessEntry
        business={business}
        key={business.id}
      />)
    }
    );
  }

  handleFilter(value) {
    if (value === 'clear') {
      this.setState({
        filterBy: null,
        filteredResults: this.state.searchResults
      })
    } else if (value === 'openNow') {
      this.setState({
        filterBy: value,
        filteredResults: this.state.searchResults.filter(business => {
          if (business.opening_hours) {
            return business.opening_hours.open_now;
          } else {
            return false;
          }
      })})
    } else {
      this.setState({filterBy: value}, () => {
        this.setState({filteredResults: this.state.searchResults.filter( business => {
          return business.price_level === parseInt(value);
        })})
      })
    }
  }

  render() {
    return (
      <div id="search-results">
        <div id="filters">
          <Filters handleFilter={this.handleFilter.bind(this)}/>
        </div>
        {!this.state.filteredResults.length ? <div style={{marginTop: "20px"}}> We couldn't find any results matching your search </div> : 
          <div id="businesses&map">
            <div style={{"marginTop": "20px"}}> This are the {this.state.filteredResults.length} closest places that match your current filter criteria</div>
            <div id="businesses">
              {this.getBusinessEntries()}
            </div>
            <div id="map-container">
            <MapContainer initLocation={this.state.initLocation.lat ? this.state.initLocation : {lat: '37.7749', lng: '-122.4194'}} businesses={this.state.filteredResults}/>
            </div>
          </div>
        } 
      </div>
    )
  }
}

export default BusinessList;