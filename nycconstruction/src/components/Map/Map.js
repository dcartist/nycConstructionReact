import React, { Component } from 'react';
import './Map.css'

class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            newLocation:""
        }
    }
    render() {
        // console.log(this.)
        let nyplace= `${this.props.newLocation}, New York, NY`
        let Location = nyplace.split(" ").join("+");
        const mapUrl = encodeURI(
        //   `https://www.google.com/maps/embed/v1/place?key=AIzaSyAfsJhoKYmk8rJBonKzUTpurtDLjMLuZbk=${this.state.newLocation}`
          `https://www.google.com/maps/embed/v1/place?key=AIzaSyAfsJhoKYmk8rJBonKzUTpurtDLjMLuZbk&q=${Location}`
         
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