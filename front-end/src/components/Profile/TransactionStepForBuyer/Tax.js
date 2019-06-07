import React, { Component } from 'react'
import { Descriptions } from 'antd'

export default class Tax extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Descriptions title="Thông tin đóng thuế bên bán" column={1}>
                        <Descriptions.Item label="Ngày đóng thuế: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Số tiền đóng: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Nơi đóng thuế: ">

                        </Descriptions.Item>
                    </Descriptions>
                    <br></br>
                    <Descriptions title="Thông tin đóng thuế bên mua" column={1}>
                        <Descriptions.Item label="Ngày đóng thuế: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Số tiền đóng: ">

                        </Descriptions.Item>

                        <Descriptions.Item label="Nơi đóng thuế: ">

                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        )
    }
}
