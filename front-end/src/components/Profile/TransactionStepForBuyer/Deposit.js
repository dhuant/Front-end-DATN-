import React, { Component } from 'react'
import { Descriptions } from 'antd'

export default class Deposit extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Descriptions title="Đặt cọc" column={1}>
            <Descriptions.Item label="Số tiền đặt cọc: ">

            </Descriptions.Item>

            <Descriptions.Item label="Thông tin thêm: ">

            </Descriptions.Item>

            <Descriptions.Item label="Phần còn lại phải thanh toán: ">

            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    )
  }
}
