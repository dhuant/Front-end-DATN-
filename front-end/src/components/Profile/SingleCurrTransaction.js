import React, { Component } from 'react'
import Stepper from './Stepper'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class SingleCurrTransaction extends Component {
  render() {
    return (
      <div>
        <table className="manage-table responsive-table">
          <Link to={`/mytransactions/123`}>
            <tbody className="transactionSingle">
              <tr>
                <td className="title-container" style={{ width: "500px" }}>
                  <img src='/images/Home.png' alt="my-properties-1" className="img-responsive hidden-xs" />
                  <div className="title">
                    <h4 style={{ color: "#84ad1d", fontSize: "20px" }}>Tên Project</h4>
                    <span><i className="fa fa-user-circle-o" />Investor Project</span>
                    <span><i className="fa fa-map-marker" style={{ width: "10px", marginLeft: "2px" }} /> Địa chỉ Project</span>
                    {/* <span className="table-property-price"><i className="fa fa-money" />{estateListOfUser.price}</span> */}
                    <span className="hidden-xs"><i className="fa fa-calendar-check-o" />
                      {/* {moment.unix(estateListOfUser.updateTime).format('DD/MM/YYYY, h:mm a')} */}
                      Ngày tháng
                  </span>
                    <span><i className="fa fa-money" style={{ marginRight: "5px" }}></i>Giá tiền</span>
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
