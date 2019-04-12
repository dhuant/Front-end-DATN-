import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

class MapOfDetailEstate extends Component {
    onInfoWindowClose = (event) => {

	};

    render() {
        const { info } = this.props;
        console.log(info);
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: info.lat, lng: info.long }}
            >
                <InfoWindow
                    onClose={this.onInfoWindowClose}
                    position={{ lat: (info.lat+0.001), lng: info.long }}
                >
                    <div>
                        <span style={{ padding: 0, margin: 0 }}>{info.address}</span>
                    </div>
                </InfoWindow>
                <Marker
                    position={{ lat: info.lat, lng: info.long }}
                />
            </GoogleMap>
        ));
        return (
            <div>
                <MapWithAMarker
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default MapOfDetailEstate;