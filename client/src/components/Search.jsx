import React from 'react';
import Suggest from './GoogleSuggest.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latLin: undefined
    }
  }

  latLinChange(loc) {
    this.setState({ latLin : loc });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.goToListings(this.refs.searchTerm.value, this.state.latLin);
    }
  }

  render() {
    return (
      <div>
        <Suggest locChange={this.latLinChange.bind(this)}/>
        <input className="searchBar" ref="searchTerm" onKeyPress={this.handleKeyPress.bind(this)} type="text" size="30" placeholder="What's nearby?" />
        <button type="Search" onClick={e => this.props.goToListings(this.refs.searchTerm.value, this.state.latLin)}>
          Search!
        </button>
      </div>
    )
  }
}

export default Search;