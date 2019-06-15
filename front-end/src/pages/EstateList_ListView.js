/* eslint-disable */
import React, { Component } from 'react'
import SingleEstateListView from '../components/Properties/SingleEstateListView'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import ViewChangingButton from '../components/Properties/ViewChangingButton'
import Sidebar from '../components/Properties/Sidebar'
import { LIST } from '../constants/ViewType'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions/request';
import AddressData from '../countries-flat.json'
import { message } from 'antd';
import {LIST_ESTATES} from '../constants/Navbar'


const optionStyle = {
    fontSize: '12px',
    overflow: "scroll",
    height: '40px'
}
const Deal = [
    { value: '1', label: 'Bất động sản bán' },
    { value: '3', label: 'Bất động sản cho thuê' }];
const Types = [
    { value: '0', label: 'Loại bất động sản' },
    { value: '1', label: 'Căn hộ/Chung cư' },
    { value: '2', label: 'Nhà ở' },
    { value: '3', label: 'Đất' },
    { value: '4', label: 'Văn phòng/mặt bằng kinh doanh' }
];
const Area = [
    { value: '0', label: 'Diện tích' },
    { value: '30-50', label: '30 - 50 m2' },
    { value: '50-70', label: '50 - 70 m2' },
    { value: '70-110', label: '70 - 110 m2' },
    { value: '150-200', label: '150 - 200 m2' },
    { value: '200-250', label: '200 - 250 m2' },
    { value: '250-300', label: '250 - 300 m2' },
    { value: '300-500', label: '300 - 500 m2' },
    { value: '500-10000', label: '> 500 m2' },

];
const Price = {
    1: [
        { value: '0', label: 'Chọn giá' },
        { value: '1-500', label: '< 500 triệu' },
        { value: '500-1000', label: '500 triệu - 1 tỷ' },
        { value: '1000-2000', label: '1 - 2 tỷ' },
        { value: '2000-3000', label: '2 - 3 tỷ' },
        { value: '3000-5000', label: '3 - 5 tỷ' },
        { value: '5000-7000', label: '5 - 7 tỷ' },
        { value: '7000-10000', label: '7 - 10 tỷ' },
        { value: '10000-20000', label: '10 - 20 tỷ' },
        { value: '20000-30000', label: '20 - 30 tỷ' },
        { value: '30000-999999', label: '>30 tỷ' }

    ],
    3: [
        { value: '0', label: 'Chọn giá' },
        { value: '1-3', label: '< 3 triệu/tháng' },
        { value: '3-5', label: '3-5 triệu' }
    ],
};
class EstateListListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: Types[0].value,
            deal: Deal[0].value,
            price: Price[Deal[0].value][0].value,
            prices: Price[Deal[0].value],
            area: Area[0].value,
            loading: false,

            city: '',
            ward: '',
            province: '',
        }
    }
    //===============
    handleDealChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        const result = Deal.find(deal => deal.value === value);
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
    onHandleChangeAddress = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    //===============

    //===============
    parseProvinceData = (AddressData) => {
        var result = []
        AddressData.map((data => {
            if (data.country === 'Vietnam' && result.indexOf(data.state) === -1) {
                result.push(data.state)
            }
        }))
        return result.sort()
    }

    parseCityData = (AddressData, stateValue) => {
        var result = []
        AddressData.map(data => {
            if (data.country === 'Vietnam' && data.state === stateValue && result.indexOf(data.city) === -1) {
                result.push(data.city)
            }
        })
        return result.sort()
    }

    parseWardData = (AddressData, stateValue, cityValue) => {
        var result = []
        AddressData.map(data => {
            if (data.country === 'Vietnam' && data.state === stateValue && data.city === cityValue && result.indexOf(data.ward) === -1) {
                result.push(data.ward)
            }
        })
        return result.sort()
    }
    //===============
    onHandleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.province === '') {
            message.warning('Bạn chưa chọn khu vực cần tìm kiếm!')
        }
        else {
            this.setState({
                loading: true
            })
            let address = ''
            if(this.state.ward !== '' && this.state.city!=='' ){
                address = `${this.state.ward}, ${this.state.city}, ${this.state.province},`
            }
            else if(this.state.ward === '' && this.state.city!=='' ){
                address = `${this.state.city}, ${this.state.province},`
            }
            else if(this.state.ward === '' && this.state.city ===''){
                address = `${this.state.province},`
            }
            const data = {
                statusProject: this.state.deal,
                type: this.state.type,
                area: this.state.area,
                price: this.state.price,
                address: address

            }
            await this.props.actSearchEstate(data)
            this.setState({loading:false})
            console.log(data)
        }

    }
    onRedirectHome = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        let { type, deal, prices, price, area, city, ward, province } = this.state;
        let estates = this.props.estates
        console.log(estates)
        var provinceList = this.parseProvinceData(AddressData)
        var cityList = this.parseCityData(AddressData, province)
        var wardList = this.parseWardData(AddressData, province, city)

        // let estates = this.props.estates;
        // console.log(estates);
        let estatesList = null;
        if (estates) {
            estatesList = estates.map((estate, index) => {
                return (
                    <SingleEstateListView key={index} estate={estate} />
                )
            });
        }
        return (
            <div>
                <MainHeader component={LIST_ESTATES}/>
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Danh sách bài đăng</h1>
                                <ul className="breadcrumbs">
                                    <li><a href="true" onClick={this.onRedirectHome}>Trang chủ</a></li>
                                    <li className="active">Danh sách bài đăng</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* Properties section body start */}
                <div className="properties-section-body content-area" style={{ backgroundColor: '#ebebeb', marginTop:'-30px' }}>
                    <div className="container">
                        <div className="properties-map-search" style={{ backgroundColor: '#5d1070' }}>
                            <div className="properties-map-search-content" style={{ paddingTop: '15px' }}>
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group" >
                                                    <select className="form-control"
                                                        name="deal"
                                                        value={deal}
                                                        onChange={this.handleDealChange}
                                                        id="sel1"
                                                        style={optionStyle}
                                                    >
                                                        {Deal.map((deal, index) => <option key={index} value={deal.value}>{deal.label}</option>)}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group" >
                                                    <select className="form-control"
                                                        name="type"
                                                        value={type}
                                                        onChange={this.handleOnChange}
                                                        id="sel2"
                                                        style={optionStyle}
                                                    >
                                                        {Types.map((type, index) => <option key={index} value={type.value}>{type.label}</option>)}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group" >
                                                    <select className="form-control"
                                                        name="province"
                                                        id="province"
                                                        required
                                                        onChange={this.onHandleChangeAddress}
                                                        style={optionStyle}
                                                    >
                                                        <option style={{ display: "none" }}>---Chọn tỉnh/thành phố---</option>
                                                        {provinceList.map((single, index) => <option key={index} value={single}>{single}</option>)}

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group">
                                                    <select className="form-control"
                                                        name="city"
                                                        id="city"
                                                        onChange={this.onHandleChangeAddress}
                                                        style={optionStyle}
                                                    >
                                                        <option style={{ display: "none" }}>---Chọn quận/huyện---</option>
                                                        {cityList.map((single, indexx) => <option key={indexx} value={single}>{single}</option>)}
                                                        {/* {this.parseCityData(AddressData, document.getElementById('city').value)} */}

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group">
                                                    <select className="form-control"
                                                        name="ward"
                                                        id="ward"
                                                        required
                                                        onChange={this.onHandleChangeAddress}
                                                        style={optionStyle}
                                                    >
                                                        <option style={{ display: "none" }}>---Chọn xã/phường---</option>
                                                        {wardList.map((single, indexx) => <option key={indexx} value={single}>{single}</option>)}

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group" >
                                                    <select className="form-control"
                                                        name="area"
                                                        value={area}
                                                        onChange={this.handleOnChange}
                                                        id="area"
                                                        style={optionStyle} >
                                                        {Area.map((area, index) => <option key={index} value={area.value}>{area.label}</option>)}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                <div className="form-group" >
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
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                                {/* <div className="form-group" > */}
                                                <button
                                                    onClick={this.onSearchMap}
                                                    type="submit" class="btn btn-success"
                                                    style={{ width: '100%', height: '40px' }}
                                                    disabled={this.state.loading}
                                                >
                                                    Tìm kiếm
                                            </button>
                                                {/* </div> */}
                                            </div>

                                        </div>
                                        {/* <div
                                        className="col-lg-2 col-md-2 col-sm-12  col-xs-12"
                                        style={{
                                            height: '90px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative'
                                        }}>

                                        <div>
                                            <button
                                                onClick={this.onSearchMap}
                                                type="button" class="btn btn-success"
                                                style={{ width: '100px' }}
                                            >
                                                Tìm kiếm
                                    </button>
                                        </div>

                                    </div> */}

                                    </div>
                                </form>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-xs-12">
                                {/* Option bar start */}
                                <div className="option-bar">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                            <h4>
                                                <span className="heading-icon">
                                                    <i className="fa fa-th-list" />
                                                </span>
                                                <span className="hidden-xs">Properties List</span>
                                            </h4>
                                        </div>
                                        <ViewChangingButton component={LIST} />
                                    </div>
                                </div>
                                {/* Option bar end */}
                                <div className="clearfix" />
                                {/* Property start */}
                                {estatesList}
                                {/* Property end */}
                                {/* Page navigation start */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li>
                                            <a href="properties-list-leftside.html" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>
                                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                                        <li><a href="properties-list-leftside.html">2</a></li>
                                        <li><a href="properties-list-fullwidth.html">3</a></li>
                                        <li>
                                            <a href="properties-list-fullwidth.html" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Page navigation end*/}
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                {/* Properties section body end */}
                <Footer />
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
// 		actGetEstatesList: () => dispatch(actions.actGetEstatesList())
// 	}
// }
const mapDispathToProp = (dispatch) => {
    return {
        actSearchEstate: (data) => dispatch(actions.reqSearchEstate(data))
    }
}
const mapStateToProp = (state) => {
    return {
        estates: state.searchEstate
    }
}
export default connect(mapStateToProp,mapDispathToProp)(withRouter(EstateListListView));
