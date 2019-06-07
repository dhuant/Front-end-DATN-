import React, { Component } from 'react'
import { Descriptions } from 'antd'

export default class Delivery extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Descriptions title="Giao bất động sản" column={1}>
                        <Descriptions.Item label="Mã căn hộ: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Số phòng: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Ngày giao bất động sản (thực tế): ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Ngày dọn vào ở: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Phí hàng tháng (nếu có): ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Các trang bị có sẵn: ">

                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div >
        )
    }
}
