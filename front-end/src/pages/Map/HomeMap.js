import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader';
import EstateMapContainer from './EstateMapContainer';
import EstateListInMap from './EstateListInMap';
// import * as actions from '../../actions/request';
// import { connect } from 'react-redux';
class HomeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estates: [],
            lat: '10.792502',
            long: '106.6137603',
            currentLatLng: {
                lat: '',
                lng: ''
            },
            location: "",
        }
    }
    // setPosition = (position) => {
    //     this.setState({
    //         currentLatLng: {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude

    //         },
    //     });
    //     this.props.actFetchEstatesRequest(this.state.currentLatLng);
    // };

    // getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(this.setPosition);
    //     } else {
    //         alert("Geolocation is not supported by this browser. Enter an address.")
    //     }
    // }
    // componentDidMount(){
    //     this.props.actFetchEstatesRequest({
    //         radius: 5,
	// 		lat: '10.792502',
	// 		long: '106.6137603',
    //     })
    // }
    render() {
        return (
            <div>
                <MainHeader />
                <div className="map-content content-area container-fluid" >
                    <div className="col-xs-12 col-sm-12 col-md-5 col-md-push-7 col-lg-6 col-lg-push-6">
                        <div className="row">
                            <EstateMapContainer />
                        </div>
                    </div>
                    <EstateListInMap />
                </div>
            </div>
        );
    }
}

// const mapDispathToProp = (dispatch) => {
//     return {
//         actFetchEstatesRequest: (info) => dispatch(actions.actFetchEstatesRequest(info))
//     }
// }
// const mapStateToProp = (state) => {
//     return {
//         estates: state.estates,
//         location: state.location
//     }
// }
// export default connect(mapStateToProp, mapDispathToProp)(HomeMap);
export default HomeMap;