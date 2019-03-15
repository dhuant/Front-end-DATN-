import React, { Component } from 'react';
import RealEstateMap from '../components/MyMap'
//import {Marker} from 'react-google-maps'
class Map extends Component {
    render() {
        return (
			<RealEstateMap
                isMarkerShown
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
    }
}

export default Map;