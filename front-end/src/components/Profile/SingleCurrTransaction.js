import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'

class SingleCurrTransaction extends Component {
  componentDidMount =() => {
    
  }
  render() {
    var {transactionSingle} = this.props
    console.log(transactionSingle)
    return (
      <div>
        <table className="manage-table responsive-table">
          <Link to={`/mytransactions/${transactionSingle._id}`}>
            <tbody className="transactionSingle">
              <tr>
                <td className="title-container" style={{ width: "500px" }}>
                  <img src='/images/Home.png' alt="my-properties-1" className="img-responsive hidden-xs" />
                  <div className="title">
                    <h4 style={{ color: "#84ad1d", fontSize: "20px" }}>{transactionSingle.project.name}</h4>
                    <span><i className="fa fa-user-circle-o" />{transactionSingle.project.investor}</span>
                    <span><i className="fa fa-map-marker" style={{ width: "10px", marginLeft: "2px" }} />{transactionSingle.project.address}</span>
                    {/* <span className="table-property-price"><i className="fa fa-money" />{estateListOfUser.price}</span> */}
                    <span className="hidden-xs"><i className="fa fa-calendar-check-o" />
                      {moment.unix(transactionSingle.updateTime).format('DD/MM/YYYY, h:mm a')}
                  </span>
                    <span><i className="fa fa-money" style={{ marginRight: "5px" }}></i>{transactionSingle.project.price} {transactionSingle.project.unit}</span>
                  </div>
                </td>
                <td style={{ width: "200px" }}>
                  <div style={{ marginTop: "5px" }}>
                    <Button type="primary" loading>Đang giao dịch</Button>
                  </div>
                </td>
                <td className="action" style={{ width: "200px" }}>

                </td>
              </tr>
            </tbody>
          </Link>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCurrTransaction)