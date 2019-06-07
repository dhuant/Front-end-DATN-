import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Employee extends Component {
    render() {
        let { employee } = this.props;
        let company =
            <li>
                <strong>Công ty:</strong>Nhà môi giới tự do
            </li>;
        if (employee.company !== "0") {
            company =
                <li>
                    <strong>Công ty:</strong>{employee.company}
                </li>
        }
        let address =
            <li>
                <strong>Địa chỉ:</strong>Đang cập nhật
            </li>;
        if (employee.address !== '') {
            address =
                <li>
                    <strong>Địa chỉ:</strong>{employee.address}
                </li>
        }
        let mobile =
            <li>
                <strong>Điện thoại:</strong>Đang cập nhật
            </li>;
        if (employee.phone !== '') {
            mobile =
                <li>
                    <strong>Điện thoại:</strong>{employee.phone}
                </li>
        }
        let url = `/agentdetail/${employee._id}`
        return (
            <Link to={url}>
                <div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/* Agent box 2start */}
                        <div className="agent-2 clearfix" style={{ height: '231.25px' }}>
                            <div className="col-lg-4 col-md-4 col-sm-4 agent-theme-2">
                                <img src={employee.avatar} style={{ height: '231.25px' }}alt="team-2" className="img-responsive" />
                                {/* social list */}
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 agent-content" style={{ padding: '15px 15px 15px 15px' }}>
                                <h3>
                                    {employee.fullname}
                                </h3>
                                <ul>
                                    {address}
                                    <li>
                                        <strong>Email:</strong> {employee.email}
                                    </li>
                                    {mobile}
                                    {company}
                                </ul>
                            </div>
                        </div>
                        {/* Agent box 2 end */}
                    </div>
                </div>
            </Link>
        );
    }
}

export default Employee;