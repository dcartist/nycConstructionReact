import React, { Component } from 'react';
import './Map.css'

class Map extends Component {
    render() {
        // let newLocation = this.props.meetup.location.split(" ").join("+");
        const mapUrl = encodeURI(
          `https://www.google.com/maps/embed/v1/place?key=AIzaSyAfsJhoKYmk8rJBonKzUTpurtDLjMLuZbk=${newLocation}`
        );
        console.log(mapUrl);
        return (
          <div>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              className="mapDiv"
              title="map"
            ></iframe>
          </div>
        );
      }
}

export default Map;