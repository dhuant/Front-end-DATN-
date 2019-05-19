/* global google */
import React, { Component } from 'react';
import EstatesMap from '../../components/Map/EstatesMap'
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import { } from 'react-google-maps'
import Searching from './Searching'

const colStyle = {
    paddingRight: '0px',
    paddingLeft: '10px'
}
const optionStyle = {
    fontSize: '12px'
}
const Deal = [
    { value: '1', label: 'Bất động sản bán' },
    { value: '3', label: 'Bất động sản cho thuê' }];
const Price = {
    1: [
        { value: '0', label: 'Chọn giá' },
        { value: '0-500', label: '<500 triệu' },
        { value: '500-1000', label: '500triệu - 1 tỷ' }
    ],
    3: [
        { value: '0-3', label: '< 3triệu/tháng' },
        { value: '3-5', label: '3-5 triệu' }
    ],
};
const Types = [
    { value: '0', label: 'Loại bất động sản' },
    { value: '1', label: 'Căn hộ/Chung cư' },
    { value: '2', label: 'Nhà ở' },
    { value: '3', label: 'Đất' },
    { value: '4', label: 'Văn phòng/mặt bằng kinh doanh' }
];

class EstateMapContainer extends Component {
    constructor(props) {
        super(props);

        this.xMapBounds = { min: null, max: null }
        this.yMapBounds = { min: null, max: null }

        this.mapFullyLoaded = false
        this.state = {
            type: Types[0].value,
            province: Deal[0].label,
            price: Price[Deal[0].value][0].value,
            prices: Price[Deal[0].value],
            activeMarker: null,
            // currentLatLng: {
            //     lat: 10.792502,
            //     lng: 106.6137603
            // },
            currentLatLng: {
                lat: 10.792502,
                lng: 106.6137603
            },
            center: {
                lat: 10.792502,
                lng: 106.6137603
            },
            zoomChange: 13,
            isMarkerShown: false,
            place: {},
        }
        console.log(this.state.prices);
        console.log(this.state.price)

    }
    handleProvinceChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        const result = Deal.find(city => city.label === value);
        this.setState({
            [name]: value,
            prices: Price[result.value],
            price: Price[result.value][0].value,
        });

    }
    handleOnChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    componentDidMount() {
        console.log(" ----- Did mount");
        var info = {
            radius: 5,
            lat: this.state.currentLatLng.lat.toString(),
            long: this.state.currentLatLng.lng.toString(),
        };
        console.log(info);
        console.log(this.state.center)
        // this.props.actFetchEstatesRequest(info); 
        this.showCurrentLocation();
        console.log(" ----- End Did mount");
    }

    handleChangeState = (selectedOption) => {
        this.setState({ selectedOption });

    }

    showPlaceDetails(place) {
        this.setState({ place });
    }

    showCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({
                        currentLatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        isMarkerShown: true
                    });
                    console.log("get current location");
                    console.log(this.state.currentLatLng);
                    console.log("----center");
                    console.log(this.state.center);
                    var info = {
                        radius: 5,
                        lat: this.state.currentLatLng.lat.toString(),
                        long: this.state.currentLatLng.lng.toString(),
                    };
                    this.props.actFetchEstatesRequest(info);
                    console.log(" ----- End getCurrent location");
                }
            )

        } else {
            console.log('error')
        }
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (prevState.currentLatLng.lat !== this.state.currentLatLng.lat) {
    //         console.log("different")
    //         return this.state.currentLatLng
    //     }
    //     return null
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

    closeOtherMarkers = (uid) => {
        this.setState({ activeMarker: uid })
    }
    handleMapChanged = () => {
        // this.getMapBounds()
        this.setMapCenterPoint()
        var info = {
            radius: 5,
            lat: this.state.center.lat.toString(),
            long: this.state.center.lng.toString(),
        };
        console.log("map");
        console.log(this.state.center);
        this.props.actFetchEstatesRequest(info)
    }

    handleMapMounted = (map) => {
        this.map = map
    }

    onZoomChanged = () => {
        this.setState({
            zoomChange: this.map.getZoom()
        })

    }
    handleMapFullyLoaded = () => {
        if (this.mapFullyLoaded)
            return
        this.mapFullyLoaded = true
        this.handleMapChanged()
    }
    setMapCenterPoint = () => {
        this.setState({
            center: {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            },
            // isMarkerShown: false
        })
    }
    insertButton = () => {
        let controlDiv = document.createElement('div');
        // let centerControl = this.CenterControl(controlDiv, this.map);
        this.map.controls[this.google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
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
        let { currentLatLng, type, province, prices, price, } = this.state;
        const { estates } = this.props;
        console.log(" ----- render")
        console.log(estates);
        console.log(this.state.isMarkerShown);
        console.log(" ----- End render")
        console.log(type);
        console.log(price);

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
                <div className="properties-map-search" style={{ backgroundColor: '#f4f4f2' }}>
                    <div className="properties-map-search-content" style={{ paddingTop: '5px' }}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{ paddingLeft: '15px' }}>
                                <div className="form-group" style={{ paddingLeft: '3px' }}>
                                    <Searching onPlaceChanged={this.showPlaceDetails.bind(this)} style={optionStyle} />
                                </div>

                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={colStyle}>
                                <div className="form-group">
                                    <select className="form-control"
                                        name="province"
                                        value={province}
                                        onChange={this.handleProvinceChange}
                                        id="sel1"
                                        style={optionStyle}
                                    >
                                        {Deal.map((province, index) => <option key={index} value={province.label}>{province.label}</option>)}

                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={colStyle}>
                                <div className="form-group">
                                    <select className="form-control"
                                        name="type"
                                        value={type}
                                        onChange={this.handleOnChange}
                                        id="sel2"
                                        style={optionStyle} >
                                        {Types.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={colStyle}>
                                <div className="form-group">
                                    <select className="form-control"
                                        name="price"
                                        value={price}
                                        onChange={this.handleOnChange}
                                        id="sel3"
                                        style={optionStyle} >
                                        {prices.map((price, index) => <option key={index} value={price.value}>{price.label}</option>)}

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ zIndex: '1', position: 'relative' }}>
                        <EstatesMap
                            isMarkerShown={this.state.isMarkerShown}
                            center={this.state.center}
                            currentLocation={currentLatLng}
                            estates={estates}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `95vh`, width: `100%`, }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            activeMarker={this.state.activeMarker}
                            closeOtherMarkers={this.closeOtherMarkers}

                            onMapMounted={this.handleMapMounted}
                            handleMapChanged={this.handleMapChanged}
                            // handleMapFullyLoaded={this.handleMapFullyLoaded}
                            onZoomChanged={this.onZoomChanged}

                        ></EstatesMap>
                    </div>

                    <div className="button-location"
                        style={{
                            width: '40px',
                            height: '40px',
                            zIndex: '2',
                            position: 'relative',
                            float: "right",
                            margin: '-65px 65px 15px 0',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                            borderRadius: '4px',                           
                            outline: 'none',
                            cursor: 'pointer',
                        }} >
                        <button
                            className="my-location"
                            onClick={this.showCurrentLocation}
                        >
                            <img src="/img/logos/my_location_black_24x24.png" alt="Vị trí của bạn" />
                        </button>
                    </div>

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
    // console.log(state);
    return {
        estates: state.estates,
    }
}
export default connect(mapStateToProp, mapDispathToProp)(EstateMapContainer);