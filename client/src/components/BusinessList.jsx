import React from 'react';
import ReactDOM from 'react-dom';
import BusinessEntry from './BusinessEntry.jsx';

class BusinessList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.businesses.data.businesses)
    return (
      this.props.businesses.data.businesses.map(business => <BusinessEntry business={business} key={business.id} /> )
    )
  }
}

export default BusinessList;