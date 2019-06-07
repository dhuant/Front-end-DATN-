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
    componentDidMount(){
        if(localStorage.getItem('company')){
            this.props.history.push('/company/profile-admin')
        }
    }
    render() {
        return (
            <div>
                <MainHeader />
                <div className="map-content content-area container-fluid" >
                    <div className="col-xs-12 col-sm-12 col-md-7 col-md-push-5 col-lg-9 col-lg-push-3 ">
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