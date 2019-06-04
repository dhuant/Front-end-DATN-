import React, { Component } from 'react'
import { Descriptions } from 'antd'

export default class Deal extends Component {
    render() {
        var {transaction} = this.props
        return (
            <div className="container">
                <div className="col-md-8 col-lg-8 col-xs-12">
                    <Descriptions title="Thỏa thuận mua ban đầu" column={1}>
                        <Descriptions.Item label="Tổng giá trị bất động sản">{transaction.selldetail.deal.total}</Descriptions.Item>
                        <Descriptions.Item label="Tiền đặt cọc"></Descriptions.Item>
                        <Descriptions.Item label="Hình thức thanh toán"></Descriptions.Item>
                        <Descriptions.Item label="Ngày bàn giao (dự kiến)"></Descriptions.Item>
                        <Descriptions.Item label="Thông tin thêm"></Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        )
    }
}
