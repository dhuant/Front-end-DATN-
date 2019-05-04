import React, { Component } from 'react';
import Select from 'react-select';
import * as actions from '../../actions/request';
import { connect } from 'react-redux';
import InfoEstate from '../../components/Map/InfoEstate'
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

class EstateListInMap extends Component {
	constructor() {
		super();
		this.state = {
			radius: '',
			error: '',
			selectedOption: null,

		};
	}
	handleChangeState = (selectedOption) => {
		this.setState({ selectedOption });

	}

	// findAround = (e) => {
	// 	e.preventDefault();
	// 	// var headers = {

	// 	//     "Access-Control-Allow-Origin": "*",
	// 	// }
	// 	var info = {
	// 		radius: 5,
	// 		lat: '10.792502',
	// 		long: '106.6137603',
	// 	}
	// 	// axios.post('http://localhost:3001/projects/getListInRadius', info)
	// 	// 	.then(res => {
	// 	// 		if (res.data.status === 200) {
	// 	// 			console.log(res.data);
	// 	// 			console.log(res.data.projects);
	// 	// 			//this.props.saveProfile(res.data.projects);
	// 	// 			// this.props.history.push('/');
	// 	// 		} else {
	// 	// 			this.setState({
	// 	// 				error: 'Error'
	// 	// 			});
	// 	// 		}
	// 	// 	});
	// 	this.props.actFetchEstatesRequest(info);
	// }
	render() {
		const { selectedOptionState, selectedOptionStatus } = this.state;
		let estates = this.props.estates;
		
		let listEstates = <h5>Không có bất động sản nào được tìm thấy</h5>;
		if (estates.length > 0) {
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
				<div className="col-xs-12 col-sm-12 col-md-7 col-md-pull-5 col-lg-6 col-lg-pull-6 map-content-sidebar" style={{ overflow: 'scroll', height: '100vh' }}>
					<div className="title-area">
						<h2 className="pull-left">Search</h2>
						{/* <a className="show-more-options pull-right" data-toggle="collapse" data-target="#options-content">
								<i className="fa fa-plus-circle" /> Show More Options
          					</a> */}
						<div className="clearfix" />
					</div>
					<div className="properties-map-search">
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
											placeholder="All Status"
											value={selectedOptionState}
											onChange={this.handleChangeState}
											options={options}
											menuPosition="fixed"
										/>
										<br />
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<Select
											placeholder="All State"
											value={selectedOptionStatus}
											onChange={this.handleChangeStatus}
											options={options}
											menuPosition="fixed"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<Select
											placeholder="All Type"
											// value={selectedOption}
											onChange={this.handleChange}
											options={options}
											menuPosition="fixed"
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
								<div className="row" >
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												placeholder="Bacony"
												// value={selectedOption}
												onChange={this.handleChange}
												options={options}
												menuPosition="fixed"
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												placeholder="Garage"
												// value={selectedOption}
												onChange={this.handleChange}
												options={options}
												menuPosition="fixed"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												placeholder="Bathrooms"
												// value={selectedOption}
												onChange={this.handleChange}
												options={options}
												menuPosition="fixed"
											/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<div className="form-group">
											<Select
												placeholder="Bedrooms"
												// value={selectedOption}
												onChange={this.handleChange}
												options={options}
												menuPosition="fixed"
											/>
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

			</div>
		);
	}
}
const mapDispatchToProp = (dispatch) => {
	return {
		actFetchEstatesRequest: (info) => dispatch(actions.actFetchEstatesRequest(info))
	}
}
const mapStateToProp = (state) => {
	return {
		estates: state.estates,
		location: state.location
	}
}
export default connect(mapStateToProp, mapDispatchToProp)(EstateListInMap);