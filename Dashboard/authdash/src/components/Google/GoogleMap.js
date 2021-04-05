// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '20%',
//   height: '20%',
//   position: 'relative'
// };

// class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: null,
//       longitude: null
//     };
//   }
//   render() {
//     return (
//       <div style={{
//         position: "relative",
//         height: "calc(100vh - 20px)"
//       }}>
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         center={
//           {
//             lat: this.state.latitude,
//             lng: this.state.longitude
//           }
//         }
//       />
//       </div>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyA3g0MpPxWOSniNx8NEhgnEm8t1LGrFlrc'
// })(MapContainer);

import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const mapContainerStyles = {
    height: '300px',
    position: 'relative'
};

class MapContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinate = this.getCoordinate.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinate, this.handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinate(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }
  handleLocationError(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
    }
  }

  render() {
    return(




      



      <div className="Geolocation">


        <button onClick={this.getLocation}>Get coordinate</button>
        {
          this.state.latitude && this.state.longitude ?
          <div style={mapContainerStyles}>
          <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: this.state.latitude,
              lng: this.state.longitude
            }
          }
          />
          </div>
          : null
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3g0MpPxWOSniNx8NEhgnEm8t1LGrFlrc'
})(MapContainer);
