import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import EstateMarker from "./EstateMarker";
// import { connect } from 'react-redux';
import compass from '../../marker/compass.png'

const EstatesMap = withScriptjs(withGoogleMap((props) => {
  
  const markers = props.estates.map(estate => <EstateMarker
    key={estate._id}
    uid={estate._id}
    estate={estate}
    location={{ lat: estate.lat, lng: estate.long }}
    activeMarker={estate._id === props.activeMarker ? true : false}
    closeMarkers={props.closeOtherMarkers}

  />);
  const onInfoWindowClose = (event) => {

  };
  // const getEstates = (e) => {
  //   let center = getCenter();
  //   console.log(center);
  // }
  return (
    <GoogleMap
    ref={props.onMapMounted}
      defaultZoom={14}
      center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
      // onCenterChanged={props.onCenterChanged}
      onZoomChanged={props.handleMapChanged}
      onDragEnd={props.handleMapChanged}
      onBoundsChanged={props.handleMapFullyLoaded}
    >
      {markers}
      {props.isMarkerShown && <Marker
        icon={compass}
        position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
      >
        <InfoWindow
          onClose={onInfoWindowClose}
          position={{ lat: (props.currentLocation.lat), lng: props.currentLocation.lng }}
          // onCloseClick
        >
          <div>
            <span style={{ padding: 0, margin: 0 }}>Bạn đang ở đây</span>
          </div>
        </InfoWindow>
      </Marker>}

    </GoogleMap>
  );
}
))


// const mapStateToProp = (state) => {
//   return {
//     estates: state.estates
//   }
// }
// export default connect(mapStateToProp, null)(EstatesMap);
export default EstatesMap;

