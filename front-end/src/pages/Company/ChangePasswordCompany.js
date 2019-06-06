import React, { Component } from 'react';
import HeaderCompany from '../../components/Company/HeaderCompany'
import Footer from '../../components/Footer'
import InfoCompany from '../../components/Company/ProfileCompany/InfoCompany'
import { CHANGE_PASSWORD } from '../../constants/Company/profileCompany'
// import FollowingProject from '../components/My Properties/FollowingProject'
import { Link } from 'react-router-dom'
import { adminService } from '../../actions/Company/admin.service'
import { message, Form, Input, Button } from 'antd';
class ChangePasswordCompany extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            newpassword: '',
            confirmpassword: '',
            confirmDirty: false,
        };
    }
    handleOnChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    onQuit = (e) => {
        e.preventDefault();
        this.props.history.push('/company/profile-admin')
    }
    onChangePassword = (e) => {
        e.preventDefault();
        let data = {
            currentPassword: this.state.password,
            newPassword: this.state.newpassword,

        }
        message.loading('Đang cập nhật lại mật khẩu', 2)
            .then(() => {
                adminService.changePasswordCompany(data)
                    .then(res => {
                        if (res.status === 200) {
                            message.success('Đổi mật khẩu thành công');
                        }
                        this.props.history.push('/company/profile-admin')
                    })
                    .catch(err => {
                        message.error('Đổi mật khẩu thất bại. Mời bạn vui lòng thử lại')
                    })
            });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let data = {
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword,
        
                }
                console.log(data)

                message.loading('Đang cập nhật lại mật khẩu', 2)
                .then(() => {
                    adminService.changePasswordCompany(data)
                        .then(res => {
                            if (res.status === 200) {
                                message.success('Đổi mật khẩu thành công');
                            }
                            this.props.history.push('/company/profile-admin')
                        })
                        .catch(err => {
                            message.error('Đổi mật khẩu thất bại. Mời bạn vui lòng thử lại')
                        })
                });
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('Mật khẩu mới không trùng khớp!');
        } else {
            callback()
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    render() {
        let { password, newpassword, confirmpassword } = this.state;
        let message = '';
        let button = <button style={{ marginRight: '5px' }} type="submit" className="btn btn-success" disabled >Lưu thay đổi</button>

        if (confirmpassword !== '' & newpassword !== '' & confirmpassword === newpassword) {
            message = <h5 style={{ color: 'green', marginTop: '4px', marginLeft: '2px' }}><b>Mật khẩu khớp</b></h5>
            button = <button style={{ marginRight: '5px' }} type="submit" className="btn btn-success" >Lưu thay đổi</button>
        }
        const { getFieldDecorator } = this.props.form;
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
                                <h1>Đổi mật khẩu</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="active">Đổi mật khẩu</li>
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
                                <InfoCompany component={CHANGE_PASSWORD} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="main-title-2">
                                    <h1><span>Đổi mật khẩu</span></h1>
                                </div>
                                {/* table start */}
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Mật khẩu hiện tại" style={{paddingRight:'20px'}} hasFeedback>
                                        {getFieldDecorator('currentPassword', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập mật khẩu!',
                                                },

                                            ],
                                        })(<Input.Password style={{marginRight:'30px'}}/>)}
                                    </Form.Item>
                                    <Form.Item label="Mật khẩu mới"style={{paddingRight:'20px'}} hasFeedback>
                                        {getFieldDecorator('newPassword', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập mật khẩu mới!',
                                                },
                                                {
                                                    validator: this.validateToNextPassword,
                                                },
                                            ],
                                        })(<Input.Password style={{marginRight:'30px'}}/>)}
                                    </Form.Item>
                                    <Form.Item label="Xác nhận mật khẩu" style={{paddingRight:'20px'}} hasFeedback>
                                        {getFieldDecorator('confirm', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Vui lòng xác nhận lại mật khẩu!',
                                                },
                                                {
                                                    validator: this.compareToFirstPassword,
                                                },
                                            ],
                                        })(<Input.Password onBlur={this.handleConfirmBlur} style={{marginRight:'30px'}}/>)}
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout} style={{ textAlign: 'right',paddingRight:'20px' }}>
                                        <Button type="primary" style={{ marginRight: '5px' }} htmlType="submit">
                                            Cập nhật mật khẩu
                                                </Button>
                                        <Button type="danger" onClick={this.onCancel}>
                                            Hủy
                                                </Button>
                                    </Form.Item>
                                </Form>
                                {/* table end */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Form.create()(ChangePasswordCompany);