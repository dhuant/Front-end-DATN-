import React, { Component } from 'react';
import EstatesMap from '../../components/Map/EstatesMap'
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import Searching from './Searching'

class EstateMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: null,
            currentLatLng: {
                lat: 10.792502,
                lng: 106.6137603
            },
            isMarkerShown: false,
            place: {
                
              }
        }
    }
    componentDidMount() {
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
    // getLocation = () => {
    //     this.setState({
    //         currentLatLng: {
    //             lat: 10.763240,
    //             lng: 106.682161
    //         },
    //         isMarkerShown: true
    //     })
    // }
    // showCurrentLocation = () => {
    //     this.getLocation();
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (prevState.currentLatLng.lat !== this.state.currentLatLng.lat) {
    //         return this.state.currentLatLng;
    //     }
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (snapshot) {
    //         let info = {
    //             radius: 5,
    //             lat: this.state.currentLatLng.lat.toString(),
    //             long: this.state.currentLatLng.lng.toString(),
    //         }
    //         console.log(info);
    //         this.props.actFetchEstatesRequest(info);
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.place !== this.state.place) {
            return this.state.place;
        }
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            let info = //
                this.state.place.geometry.location
            
            console.log(JSON.stringify(info));
            // this.props.actFetchEstatesRequest(info);
        }
    }
    // componentDidUpdate(){
    //     let info = {
    //         radius: 5,
    //         lat: this.state.currentLatLng.lat.toString(),
    //         lng: this.state.currentLatLng.lng.toString(),
    //     }
    //     console.log(info);
    //     this.props.actFetchEstatesRequest(info);
    // }

    

    render() {
        const { estates } = this.props;
        let {place} = this.state;
        console.log(place.ge);
        
        // // const { place } = 
        // console.log(estates);
        // let tmp = JSON.stringify(place.geometry, null, 2);
        // console.log(tmp);

        // let tmp2 = JSON.stringify(tmp.location, null, 2)
        // console.log(JSON.stringify(place.geometry, null, 2));
        return (
            <div>
                <Searching  onPlaceChanged = {this.showPlaceDetails.bind(this)}/>
                <EstatesMap
                    isMarkerShown={this.state.isMarkerShown}
                    currentLocation={this.state.currentLatLng}
                    estates={estates}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
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
    return {
        estates: state.estates,
    }
}
export default connect(mapStateToProp, mapDispathToProp)(EstateMapContainer);
