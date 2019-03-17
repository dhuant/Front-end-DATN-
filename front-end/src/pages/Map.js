import React, { Component } from 'react';
import EstatesMaps from '../components/Map/EstatesMap'
import axios from 'axios';
import { connect } from 'react-redux';
import * as Types from './../constants/ActionTypes';
import * as actions from '../actions/request';
class Map extends Component {
	constructor() {
		super();
		this.state = {
			radius: '',
			lat: '',
			long: '',
			error: ''
		};
	}
	findAround = (e) => {
		e.preventDefault();
		// var headers = {

		//     "Access-Control-Allow-Origin": "*",
		// }
		var info = {
			radius: 5,
			lat: '10.792502',
			long: '106.6137603',
		}
		// axios.post('http://localhost:3001/projects/getListInRadius', info)
		// 	.then(res => {
		// 		if (res.data.status === 200) {
		// 			console.log(res.data);
		// 			console.log(res.data.projects);
		// 			//this.props.saveProfile(res.data.projects);
		// 			// this.props.history.push('/');
		// 		} else {
		// 			this.setState({
		// 				error: 'Error'
		// 			});
		// 		}
		// 	});
		this.props.actFetchEstatesRequest(info);
	}

	render() {
		console.log(this.props.estates);
		return (
			<div>
				<EstatesMaps
					isMarkerShown
					estates={this.props.estates}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `100vh`, width: `60%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
				<div className="form-group">
					<button
						onClick={this.findAround}
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
		estates: state.estates
	}
}
export default connect(mapStateToProp, mapDispathToProp)(Map);