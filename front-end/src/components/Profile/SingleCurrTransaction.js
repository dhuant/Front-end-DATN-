/* eslint-disable */
import React, { Component } from 'react'
import { Button, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import * as transAction from '../../actions/transactionRequest'

class SingleCurrTransaction extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       waitingId: ''
    }
  }
  
  componentDidMount = async() => {
    await this.props.onGetRequestList(this.props.transactionSingle.project._id)
  }

  onCancelingTransaction = () => {
    console.log('abc')
    this.props.onGetRequestList(this.props.transactionSingle.project._id)
  }
  render() {
    var { transactionSingle } = this.props
    console.log(transactionSingle)
    return (
      <div>
        <table className="manage-table responsive-table">
          <tbody className="transactionSingle">
            <tr>
              <td className="title-container" style={{ width: "700px" }}>
                <img src={transactionSingle.project.url[0]} alt="my-properties-1" className="img-responsive hidden-xs" style={{ width: "150px", height: "150px" }} />
                <div className="title">
                  <Link to={`/mytransactions/${transactionSingle._id}/${transactionSingle.typetransaction}`}>
                    <h4 style={{ color: "#84ad1d", fontSize: "20px", cursor: "pointer" }} className="transaction-title">{transactionSingle.project.name}</h4>
                  </Link>
                  <span><i className="fa fa-user-circle-o" />{transactionSingle.project.investor}</span>
                  <span><i className="fa fa-map-marker" style={{ width: "10px", marginLeft: "2px" }} />{transactionSingle.project.address}</span>
                  {/* <span className="table-property-price"><i className="fa fa-money" />{estateListOfUser.price}</span> */}
                  <span className="hidden-xs"><i className="fa fa-calendar-check-o" />
                    {moment.unix(transactionSingle.updateTime).format('DD/MM/YYYY, h:mm a')}
                  </span>
                  <span>
                    <i className="fa fa-money" style={{ marginRight: "5px" }}></i>
                    {transactionSingle.project.price >= 1000 && transactionSingle.typetransaction === 1
                      ? (transactionSingle.project.price / 1000).toFixed(2) : transactionSingle.project.price} {transactionSingle.project.unit}
                  </span>
                </div>
              </td>
              <td style={{ width: "200px" }}>
                <div style={{ marginTop: "5px" }}>
                  {transactionSingle.status === 1 ?
                    <Tag color="cyan">Đang trong quá trình giao dịch</Tag>
                    : transactionSingle.status === 2 ? <Tag color="purple">Đang chờ xác nhận</Tag> : transactionSingle.status === 3 ? <Tag color="green">Giao dịch thành công</Tag>
                      : <Tag color="red">Giao dịch hết hạn</Tag>}

                </div>
              </td>
              <td className="action" style={{ width: "200px" }}>
                <i className="fa fa-remove fa-2x" style={{ color: "red", cursor: "pointer" }} onClick={this.onCancelTransaction}></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
    waiting: state.waiting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCancelTransaction: (data) => dispatch(transAction.actCancelTransactionRequest(data)),
    onGetRequestList: (id) => dispatch(transAction.actGettingWaitingListRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCurrTransaction)