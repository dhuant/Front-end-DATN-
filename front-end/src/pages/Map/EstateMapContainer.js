import React, { Component } from 'react';
import EstatesMap from '../../components/Map/EstatesMap'

import { connect } from 'react-redux';
import * as actions from '../../actions/request';
// import EstateMarker from '../../components/Map/EstateMarker'
// import compass from '../../marker/compass.png'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
// import Searching from './Searching'

class EstateMapContainer extends Component {
    constructor(props) {
        super(props);

        this.xMapBounds = { min: null, max: null }
        this.yMapBounds = { min: null, max: null }

        this.mapFullyLoaded = false
        this.state = {
            activeMarker: null,
            // currentLatLng: {
            //     lat: 10.792502,
            //     lng: 106.6137603
            // },
            currentLatLng: {
                lat: 15.0573022,
                lng: 108.6411479
            },
            isMarkerShown: false,
            place: {}
            
        }
    }
    componentDidMount() {
        this.showCurrentLocation();
        var info = {
            radius: 5,
            lat: this.state.currentLatLng.lat.toString(),
            long: this.state.currentLatLng.lng.toString(),
        };
        console.log(info);
        this.props.actFetchEstatesRequest(info); 
    }
  
    showPlaceDetails(place) {
        this.setState({ place });
    }
    showCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState ({
                        currentLatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        isMarkerShown: true
                    })
                }
            )
        } else {
            console.log('error')
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.currentLatLng.lat !== this.state.currentLatLng.lat) {
            return this.state.currentLatLng
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            let info = {
                radius: 5,
                lat: this.state.currentLatLng.lat.toString(),
                long: this.state.currentLatLng.lng.toString(),
            }
            console.log(info);
            this.props.actFetchEstatesRequest(info);
        }
    }
    closeOtherMarkers = (uid) => {
		this.setState({activeMarker: uid})
    }
    handleMapChanged=()=> {
        // this.getMapBounds()
        this.setMapCenterPoint()
    }
    
    handleMapMounted = (map) => {
        this.map = map
    }
    
    handleMapFullyLoaded = () => {
        if (this.mapFullyLoaded)
          return
        this.mapFullyLoaded = true
        this.handleMapChanged()
    }
    setMapCenterPoint =() => {
        this.setState({
            currentLatLng: {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            },
        })
    }
    // getMapBounds =()=> {
    //     var mapBounds = this.map.getBounds();
    //     console.log(mapBounds);
    //     var xMapBounds = mapBounds.b;
    //     var yMapBounds = mapBounds.f;
    //     console.log(xMapBounds);
    //     console.log(yMapBounds);
        
    
    //     // this.xMapBounds.min = xMapBounds.b
    //     // this.xMapBounds.max = xMapBounds.f
    
    //     // this.yMapBounds.min = yMapBounds.f
    //     // this.yMapBounds.max = yMapBounds.b
    //   }
    //===============Hàm cho Search==============
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (prevState.place !== this.state.place) {
    //         return this.state.place;
    //     }
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (snapshot) {
    //         let info = this.state.place.geometry.location
    //         console.log(JSON.stringify(info));
    //     }
    // }

    render() { 
        const {currentLatLng}  = this.state;
        const { estates } = this.props;
        
        // let {place} = this.state;
        // console.log(place.ge);
        
        // // const { place } = 
        // console.log(estates);
        // let tmp = JSON.stringify(place.geometry, null, 2);
        // console.log(tmp);

        // let tmp2 = JSON.stringify(tmp.location, null, 2)
        // console.log(JSON.stringify(place.geometry, null, 2));
        return (
            <div>
                {/* <Searching  onPlaceChanged = {this.showPlaceDetails.bind(this)}/> */}
                <EstatesMap
                    isMarkerShown={this.state.isMarkerShown}
                    currentLocation={currentLatLng}
                    estates={estates}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    activeMarker={this.state.activeMarker}
                    closeOtherMarkers={this.closeOtherMarkers}
                    
                    onMapMounted={this.handleMapMounted}
                    handleMapChanged={this.handleMapChanged}
                    handleMapFullyLoaded={this.handleMapFullyLoaded}
                    
                />                
                <div className="form-group">
                    <button
                        onClick={this.showCurrentLocation}
                        type="submit"
                        className="button-md button-theme btn-block"
                    >
                        Current Location
                    </button>
                </div>
            </div>
        );
    }
}
const mapDispathToProp = (dispatch) => {
    return {
        actFetchEstatesRequest: (info) => dispatch(actions.actFetchEstatesRequest(info))
    }
}
const mapStateToProp = (state) => {
    console.log(state);
    return {
        estates: state.estates,
    }
}
export default connect(mapStateToProp, mapDispathToProp)(EstateMapContainer);
