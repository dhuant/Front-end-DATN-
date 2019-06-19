import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import Info from '../components/Profile/Info'
import { MY_TRANSACTION } from '../constants/Profile'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleCurrTransaction from '../components/Profile/SingleCurrTransaction'
import * as transAction from '../actions/transactionRequest'
import {Empty} from 'antd'

class MyTransaction extends Component {
  componentDidMount = () => {
    this.props.onGetTransactionHistory('1')
  }
  render() {
    var { transaction } = this.props
    return (
      <div>
        <MainHeader />
        {/* Sub banner start */}
        <div className="sub-banner overview-bgi">
          <div className="overlay">
            <div className="container">
              <div className="breadcrumb-area">
                <h1>Giao dịch của tôi</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Trang chủ</Link></li>
                  <li className="active">Giao dịch của tôi</li>
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
                <Info component={MY_TRANSACTION} />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="main-title-2">
                  <h1><span>Giao dịch</span> của tôi</h1>
                </div>
                {/* table start */}
                <table className="manage-table responsive-table">
                  <tbody>
                    {this.ShowTransactionList(transaction)}
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
  ShowTransactionList = (transaction) => {
    var result = null;
    if (transaction.length > 0) {
      result = transaction.map((single, index) => {
        console.log(single)
        if (single.transaction !== null)
          return (
            <SingleCurrTransaction key={index} transactionSingle={single} />

          );
      });
    }
    else if (transaction.length === 0 || transaction === undefined) {
      result = (<Empty />)
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTransactionHistory: (page) => dispatch(transAction.actGettingTransactionHistoryRequest(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTransaction)
