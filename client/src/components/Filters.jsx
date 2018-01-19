import React from 'react';


class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    this.props.handleFilter(e.target.value);
  }

  render() {
    return (
      <div> 
        <button className="filterButtons" style={{marginRight: 3}} onClick={this.handleFilterClick} value='clear'> Clear Filters </button>
        <button className="filterButtons" style={{marginRight: 1}} onClick={this.handleFilterClick} value='1'> $ </button>
        <button className="filterButtons" style={{marginRight: 1}} onClick={this.handleFilterClick} value='2'> $$ </button>
        <button className="filterButtons" style={{marginRight: 1}} onClick={this.handleFilterClick} value='3'> $$$ </button>
        <button className="filterButtons" style={{marginRight: 1}} onClick={this.handleFilterClick} value='4'> $$$$ </button>
        <button className="filterButtons" style={{marginLeft: 2}} onClick={this.handleFilterClick} value='openNow'> Open Now </button>
      </div>
    )
  }
}

export default Filters;