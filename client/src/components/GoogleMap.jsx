import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../../config/yelp.js';
import React from 'react'; 
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      businesses: props.businesses
    }
    
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    })
  }

  onInfoWindowClose() {
    this.setState ({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    })
  }

  render() {
    const style = {
      width: '30%',
      height: '100%',
      position: "sticky"
    }
    return (
      <Map google={this.props.google} zoom={14} style={style} initialCenter={this.props.initLocation}> 
        {this.state.businesses.map(result => {
          return (<Marker 
            key={result.id}
            onClick={this.onMarkerClick}
            name={result.name}
            img={result.icon}
            position={result.geometry.location}
            formatted_address={result.formatted_address}
            price_level={result.price_level}
          />);
        })}

        <InfoWindow onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name} <span style={{"color": "grey"}}>- ({'$'.repeat(this.state.selectedPlace.price_level)})</span></h3>
              <p style={{"color": "grey"}}>{this.state.selectedPlace.formatted_address}</p>
            </div>
        </InfoWindow>
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_API_KEY)
})(MapContainer);