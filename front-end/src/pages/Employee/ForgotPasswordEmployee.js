import React, { Component } from 'react';
import {message}from 'antd';

import {service} from '../../actions/service'

class ForgotPasswordEmployee extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
    onCancel =(e) =>{
        e.preventDefault();
        this.props.history.push('/login')
    }
    onSendEmail = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        let data = {
            email: this.state.email
        }
        message.loading('Vui lòng chờ trong giây lát', 1)
        .then(()=>{
            service.resetPasswordEmployee(data)
            .then(res => {
                if(res.status === 200){
                    message.success('Mật khẩu đã được gửi tới email của bạn');
                }
                this.props.history.push('/login')
            })
            .catch(err => {
                message.error('Lỗi. Phiền bạn vui lòng kiểm tra lại')
            })
        });
    }
    render() {
        return (
            <div>
                <div className="content-area" style={{ backgroundColor: 'lightgray' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Form content box start */}
                                <div className="form-content-box">
                                    {/* details */}
                                    <div className="details">
                                        {/* Main title */}
                                        <div className="main-title" >
                                            <h1>
                                                <span>Quên mật khẩu</span>
                                            </h1>
                                        </div>
                                        <div style={{borderBottom: '1px solid #ccc', marginBottom:'10px'}}></div>
                                        {/* Form start */}
                                        <form onSubmit={this.onSendEmail}>
                                            <p style={{fontFamily:'inherit', fontSize:'13px', margin:'0 0 5px 0'}}>Vui lòng nhập email của tài khoản để hệ thống gửi email mới</p>
                                            <div className="form-group">
                                                <input
                                                    onChange={this.handleOnChange}
                                                    type="email"
                                                    name="email"
                                                    className="input-text"
                                                    placeholder="Nhập email tài khoản của bạn"
                                                    required
                                                />
                                                
                                            </div>
                                            <div style={{borderBottom: '1px solid #ccc', marginTop:'26px'}}></div>
                                            <div className="form-group" style={{ textAlign: 'right', marginTop:'20px' }}>
                                                {/* <button type="submit" className="btn btn-primary btn-block">Đăng kí</button> */}
                                                <button style={{ marginRight: '5px' }} type="submit" className="btn btn-success">Gửi email</button>
                                                <button onClick={this.onCancel} type="button" class="btn btn-primary">Hủy</button>

                                            </div>

                                
                                        </form>
                                        {/* Form end */}
                                    </div>
                                    {/* Footer */}

                                </div>
                                {/* Form content box end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPasswordEmployee;