import React, { Component } from 'react';

class DetailCompany extends Component {
    render() {
        let {user} = this.props;
        console.log(user);
        return (
            <div>
                <div className="my-address" style ={{padding: '0px 30px'}}>
                    <div className="main-title-2">
                        <h1><span>Thông tin tài khoản</span></h1>
                    </div>
                    <form >
                        <div className="form-group">
                            <label><b>Tên công ty</b></label>
                            <input type="text" className="input-text" name="your name" placeholder="John Antony" value={user.companyname}/>
                        </div>
                        <div className="form-group">
                            <label><b>Địa chỉ</b></label>
                            <input type="text" className="input-text" name="agent" placeholder="Địa chỉ của công ty" value={user.address}  />
                        </div>
                        <div className="form-group">
                            <label><b>Số điện thoại</b></label>
                            <input type="text" className="input-text" name="phone" placeholder="Nhập số điện thoại của công ty bạn" value={user.phone}/>
                        </div>
                        <div className="form-group">
                            <label><b>Email</b></label>
                            <input type="email" className="input-text" name="email" placeholder="Email của công ty" value={user.email}/>
                        </div>
                        <div className="form-group">
                            <label><b>Mô tả</b></label>
                            <textarea className="input-text" name="message" placeholder="Nhập mô tả về công ty của bạn" value={user.description}/>
                        </div>
                        <a href="true" className="btn button-md button-theme">Save Changes</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default DetailCompany;