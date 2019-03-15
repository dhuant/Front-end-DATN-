import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const RealEstateMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={14}
      center={{ lat: 10.763237, lng: 106.682138 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 10.763237, lng: 106.682138  }} />}
    </GoogleMap>
  );
}
))

export default RealEstateMap;