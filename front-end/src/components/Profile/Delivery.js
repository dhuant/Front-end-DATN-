import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, message, Form, Icon, Input, Checkbox, Progress, InputNumber, Select, DatePicker, Modal } from 'antd';

const { TextArea } = Input

class Delivery extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12">
              <Form.Item label="Mã căn hộ: ">
                {getFieldDecorator('estateCode', {
                  rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                })(
                  <Input style={{ width: "100%" }} />
                )}
              </Form.Item>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <Form.Item label="Số phòng (nếu có): ">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12">
              <Form.Item label="Ngày giao bất động sản (thực tế): ">
                {getFieldDecorator('deliveryDate', {
                  rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                })(
                  <DatePicker style={{ width: "100%" }} />
                )}
              </Form.Item>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <Form.Item label="Ngày dọn vào ở: ">
                {getFieldDecorator('startDate', {
                  rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                })(
                  <DatePicker style={{ width: "100%" }} />
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xs-12">
              <Form.Item label="Phí hàng tháng (nếu có): ">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div className="col-md-5 col-lg-5 col-xs-12">
              <Form.Item label="Các trang bị có sẵn: ">
                {getFieldDecorator('deliveryDate', {
                  rules: [{ required: true, message: 'Trường này chưa được nhập!' }],
                })(
                  <TextArea
                    style={{ width: "100%" }}
                  >
                  </TextArea>
                )}
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const WrappedFormDelivery = Form.create()(Delivery)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFormDelivery)
