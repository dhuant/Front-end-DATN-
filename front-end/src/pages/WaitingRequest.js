import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import Info from '../components/Profile/Info'
import { WAITING_REQUEST } from '../constants/Profile'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleWaiting from '../components/Profile/SingleWaiting'
import * as actions from '../actions/request'
import * as transActions from '../actions/transactionRequest'
import { Button } from 'antd'

class WaitingRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: ''
        }
    }

    // onChangeValue = (e) => {
    //     this.setState({project: e.target.value})
    //     // var projectid = document.getElementById('project').value
    //     this.props.onShowWaitingRequestList(e.target.value)
    // }

    componentDidMount = () => {
        this.props.onGettingEstateListOfUser()
        this.props.onShowWaitingRequestList(document.getElementById('project').value)
        // console.log(document.getElementById('project').value)
        // var projectid = document.getElementById('project').value
        // // var projectid = event.target.value
        // this.setState({project: document.getElementById('project').value})
        // this.props.onShowWaitingRequestList(projectid)
    }
    render() {
        var { estatesListOfUser, waiting } = this.props
        console.log(waiting.requests)
        return (
            <div>
                <MainHeader />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>Danh sách yêu cầu</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="active">Danh sách yêu cầu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sub Banner end */}

                {/* My Propertiess start */}
                <div className="content-area-7 my-properties">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <Info component={WAITING_REQUEST} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Danh sách</span> yêu cầu</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 col-lg-5 col-xs-12" style={{ float: "right" }}>
                                        <label>
                                            Bất động sản:
                                        </label>
                                        <select className="form-control"
                                            name="type"
                                            // value={newsType}
                                            // onChange={this.onChangeValue}
                                            id="project">
                                            {estatesListOfUser.map((estateName, index) => <option key={index} value={estateName._id}>{estateName.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <br></br>
                                {/* table start */}
                                <table className="manage-table responsive-table">
                                    <tbody>
                                        {this.ShowWaitingRequestList(waiting)}
                                    </tbody>
                                </table>
                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Propertiess end */}
                <Footer />
            </div>
        )
    }
    ShowWaitingRequestList = (waiting) => {
        console.log(waiting)
        var result = null;
        if (waiting.requests === undefined) {
            result = (<tr><td>Danh sách yêu cầu hiện đang trống!</td></tr>)
        }
        else if (waiting.requests && waiting.requests.length > 0) {
            result = waiting.requests.map((single, index) => {
                console.log(single)
                // if (single.project === projectid)
                return (
                    <SingleWaiting key={index} waitingRequestSingle={single} waitingList={waiting} />
                );
            });
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        estatesListOfUser: state.estatesListOfUser,
        waiting: state.waiting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGettingEstateListOfUser: () => dispatch(actions.actGetEstateListOfUserRequest()),
        onShowWaitingRequestList: (projectid) => dispatch(transActions.actGettingWaitingListRequest(projectid)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRequest)
