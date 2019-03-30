import React, { Component } from 'react';
import { Marker } from "react-google-maps";
class EstateMarker extends Component {
    render() {
        return (
            <Marker
                position={this.props.location}
            />
            // {/* <Marker position={{lat: 10.792502, lng: 106.6137603  }} /> */}
        );
    }
}

export default EstateMarker;