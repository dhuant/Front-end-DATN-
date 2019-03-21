import React, { Component } from 'react';
import EstatesMaps from '../components/Map/EstatesMap'
import axios from 'axios';
import { connect } from 'react-redux';
import * as Types from './../constants/ActionTypes';
import * as actions from '../actions/request';
import InfoEstate from '../components/Map/InfoEstate'
import Select from 'react-select';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];
class Map extends Component {
	constructor() {
		super();
		this.state = {
			radius: '',
			lat: '',
			long: '',
			error: '',
			selectedOption: null,
		};
	}
	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
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
		const { selectedOption } = this.state;
		let estates = this.props.estates;
		let listEstates = null;
		if (estates) {
			listEstates = estates.map((estate, index) => {
				return (
					<InfoEstate
						key={index}
						estate={estate}
					/>
				)
			}
			)
		}
		console.log(estates);
		console.log(this.props.estates);
		return (
			<div>
				<Header />
				<MainHeader />
				<div className="map-content content-area container-fluid" >
					<div className="col-xs-12 col-sm-12 col-md-5 col-md-push-7 col-lg-6 col-lg-push-6">
						<div className="row">
							<EstatesMaps
								isMarkerShown
								estates={this.props.estates}
								googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCaznvdfOL3vMLdqR729vJEWauyZp9-Ud8&v=3.exp&libraries=geometry,drawing,places`}
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-7 col-md-pull-5 col-lg-6 col-lg-pull-6 map-content-sidebar">
						<div className="title-area">
							<h2 className="pull-left">Search</h2>
							<a className="show-more-options pull-right" data-toggle="collapse" data-target="#options-content">
								<i className="fa fa-plus-circle" /> Show More Options
          					</a>
							<div className="clearfix" />
						</div>
						<div className="properties-map-search" style={{height: '1000px'}}>
							<div className="properties-map-search-content">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<input className="form-control search-fields" placeholder="Enter address e.g. street, city" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												value={selectedOption}
												onChange={this.handleChange}
												options={options}
											/>
											<br />
										</div>
									</div>

									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												value={selectedOption}
												onChange={this.handleChange}
												options={options}
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												value={selectedOption}
												onChange={this.handleChange}
												options={options}

											/>
										</div>
									</div>
									{/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="range-slider">
											<label>Area</label>
											<div data-min={0} data-max={10000} data-unit="Sq ft" data-min-name="min_area" data-max-name="max_area" className="range-slider-ui ui-slider" aria-disabled="false" />
											<div className="clearfix" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="range-slider">
											<label>Price</label>
											<div data-min={0} data-max={150000} data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider" aria-disabled="false" />
											<div className="clearfix" />
										</div>
									</div> */}
								</div>
								<div id="options-content" className="collapse">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="form-group">
												<Select
													value={selectedOption}
													onChange={this.handleChange}
													options={options}
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="form-group">
												<Select
													value={selectedOption}
													onChange={this.handleChange}
													options={options}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="form-group">
												<Select
													value={selectedOption}
													onChange={this.handleChange}
													options={options}
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="form-group">
												<Select
													value={selectedOption}
													onChange={this.handleChange}
													options={options}
												/>
											</div>
										</div>
									</div>
									<label className="margin-t-10">Features</label>
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox1" type="checkbox" />
												<label htmlFor="checkbox1">
													Free Parking
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox2" type="checkbox" />
												<label htmlFor="checkbox2">
													Air Condition
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox3" type="checkbox" />
												<label htmlFor="checkbox3">
													Places to seat
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox4" type="checkbox" />
												<label htmlFor="checkbox4">
													Swimming Pool
                      </label>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox5" type="checkbox" />
												<label htmlFor="checkbox5">
													Laundry Room
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox6" type="checkbox" />
												<label htmlFor="checkbox6">
													Window Covering
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox7" type="checkbox" />
												<label htmlFor="checkbox7">
													Central Heating
                      </label>
											</div>
											<div className="checkbox checkbox-theme checkbox-circle">
												<input id="checkbox8" type="checkbox" />
												<label htmlFor="checkbox8">
													Alarm
                      </label>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="map-content-separater" />
							<div className="clearfix" />
							<div className="title-area">
								<h2 className="pull-left">Properties</h2>
								<br />
								<div className="clearfix" />
							</div>
							<div className="fetching-properties">
								{listEstates}
							</div>
						</div>
					</div>
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