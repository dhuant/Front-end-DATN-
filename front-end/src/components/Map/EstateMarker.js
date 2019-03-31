import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import houseIcon from '../../marker/pin.png'
class EstateMarker extends Component {
    render() {
        return (
            <Marker
                icon={houseIcon}
                position={this.props.location}
            />
            // {/* <Marker position={{lat: 10.792502, lng: 106.6137603  }} /> */}
        );
    }
}

export default EstateMarker;