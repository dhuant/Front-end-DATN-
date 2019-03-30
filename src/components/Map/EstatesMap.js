import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import EstateMarker from "./EstateMarker";
import { connect } from 'react-redux';

const EstatesMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.estates.map( estate => <EstateMarker
                    key={estate._id}
                    estate={estate}
                    location={{lat: estate.lat, lng: estate.long}}
                  />);
            
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat: 10.792502, lng: 106.6137603 } }
        >
        {markers}
        {/* {props.isMarkerShown && <EstateMarker/>} */}
      </GoogleMap>
    );
  }
))


const mapStateToProp = (state) => {
	return {
		estates: state.estates
	}
}
export default connect(mapStateToProp, null) (EstatesMap);
