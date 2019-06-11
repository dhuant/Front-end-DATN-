import React, { Component } from 'react';
import { ADD_ACCOUNT } from '../../constants/Company/profileCompany'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import Footer from '../../components/Footer'
import HeaderCompany from '../../components/Company/HeaderCompany'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { connect } from 'react-redux';
// import * as actions from '../../actions/Company/requestCompany';
import { withRouter } from 'react-router-dom'
import { adminService } from '../../actions/Company/admin.service'
import moment from 'moment'
import { Form, Input, Button, Select, } from 'antd';
const { Option } = Select;

class AddAccount extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
            address: '',
            disable: true,
        };
    }
    onCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/company/profile-admin')
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    disable: true,
                })
                let account = {
                    fullname: values.fullname,
                    email: values.email,
                    phone: `${values.prefix} ${values.phone}`,
                    description: this.state.description,
                    address: this.state.address,
                    avatar: 'https://res.cloudinary.com/dne3aha8f/image/upload/v1559203321/ddtyciszy3oiwdjasrjh.png?fbclid=IwAR3RFWWiOrMw-sMiNigCXJMFEGdpYw_FUBa4PxZYZLTtHvjLaa1JjBpNGy0',
                    createTime: moment().unix(),
                    updateTime: moment().unix(),
                }
                console.log(values);
                console.log(account);
                // this.props.form.resetFields([fullname])
                message.loading('Đang thêm tài khoản, vui lòng chờ trong giây lát', 2.5)
                    .then(() => {
                        adminService.addAccount(account)
                            .then(res => {
                                if (res.status === 201) {
                                    message.success('Thêm tài khoản nhân viên thành công');
                                }
                                this.props.history.push('/company/profile-admin')
                            })
                            .catch(err => {
                                console.log(err)
                                message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
                                this.setState({
                                    disable: false,
                                })
                            })
                    });

            }
            else{
                this.setState({
                    disable: false,
                })
            }
        });
    };
    onCheckFullName = (rule, value, callback) => {
        const reg = /\d|^[a-z]|^\s|[A-z]{8}|\S{8}|[`~!@#$%^&*()(\-)_=+[(\]){};:'",<.>/?\\|]/
        //Check kí tự đầu là số, chữ cái viết thường, 
        //bắt đầu bằng khoảng trắng, 8 kí tự liền nhau (tên: Nghiêng), kí tự đặc biệt
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value.length < 4) {
            callback('Vui lòng nhập đúng tên!');
        }
        else {
            callback()
        }
    }
    onCheckPhoneNumber = (rule, value, callback) => {
        const reg = /^[1-9]?([1-9][0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value) && value.length === 9)) {
            callback();
        }
        else {
            callback('Vui lòng nhập đúng số điện thoại!')
        }
    };
    componentDidMount() {
        this.setState({ disable: false })
    }
    render() {
        console.log(this.state.disable);
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '84',
        })(
            <Select style={{ width: 70 }}>
                <Option value="84">+84</Option>
                <Option value="86">+86</Option>
            </Select>,
        );
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 24,
                    offset: 0,
                },
            },
        };
        return (
            <div>
                <HeaderCompany />
                {/* Sub banner start */}
                <div className="sub-banner overview-bgi">
                    <div className="overlay">
                        <div className="container">
                            <div className="breadcrumb-area">
                                <h1>My Properties</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Thêm tài khoản nhân viên</li>
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
                                <InfoCompany component={ADD_ACCOUNT} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Thêm tài khoản nhân viên</span> </h1>
                                </div>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Họ và tên" style={{ paddingRight: '20px' }} hasFeedback>
                                        {getFieldDecorator('fullname', {
                                            rules: [
                                                {
                                                    min: 5,
                                                    required: true,
                                                    message: 'Vui lòng nhập tên của nhân viên!',
                                                },
                                                {
                                                    validator: this.onCheckFullName,
                                                },
                                            ],
                                        })(<Input
                                            //onChange={this.onChange} 
                                            style={{ marginRight: '30px' }}
                                            placeholder="Nhập tên nhân viên (Bắt đầu bằng chữ in hoa)"
                                            maxLength={50} />)}
                                    </Form.Item>
                                    <Form.Item label="E-mail" style={{ paddingRight: '20px' }} hasFeedback>
                                        {getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    type: 'email',
                                                    message: 'Văn bản không đúng định dạng email',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập email của nhân viên vào ô văn bản',
                                                },
                                            ],
                                        })(<Input style={{ marginRight: '30px' }} />)}
                                    </Form.Item>
                                    <Form.Item label="Số điện thoại" style={{ paddingRight: '20px' }} hasFeedback>
                                        {getFieldDecorator('phone', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập số điện thoại của nhân viên!',
                                                },
                                                {
                                                    validator: this.onCheckPhoneNumber,
                                                },
                                            ],
                                        })(<Input
                                            addonBefore={prefixSelector}
                                            //onChange={this.onChange} 
                                            style={{ marginRight: '30px' }}
                                            placeholder="Nhập 9 chữ số sau số 0"
                                            maxLength={9} />)}
                                    </Form.Item>

                                    <Form.Item {...tailFormItemLayout} style={{ textAlign: 'right', paddingRight: '20px' }}>
                                        <Button type="primary" style={{ marginRight: '5px' }} htmlType="submit" disabled={this.state.disable}>
                                            Tạo tài khoản
                                                </Button>
                                        <Button type="danger" onClick={this.onCancel}>
                                            Hủy
                                                </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    {/* My Propertiess end */}
                    <Footer />
                </div>
            </div>
        );
    }
}
const mapDispathToProp = (dispatch) => {
    return {
    }
}
const mapStateToProp = (state) => {
    return {
        userCompany: state.userCompany
    }
}

export default connect(mapStateToProp, mapDispathToProp)(withRouter(Form.create()(AddAccount)));
