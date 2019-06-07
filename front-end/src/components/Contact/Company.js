import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Company extends Component {
    render() {
        let { company } = this.props;
        // let companyname =
        //     <li>
        //         <strong>Công ty:</strong>Đang cập nhật
        //     </li>;
        // if (company.company !== "0") {
        //     companyname =
        //         <li>
        //             <strong>Công ty:</strong>{company.companyname}
        //         </li>
        // }
        let address =
            <li>
                <strong>Địa chỉ:</strong>Đang cập nhật
            </li>;
        if (company.address !== '') {
            address =
                <li>
                    <strong>Địa chỉ:</strong>{company.address}
                </li>
        }
        let mobile =
            <li>
                <strong>Điện thoại:</strong>Đang cập nhật
            </li>;
        if (company.phone !== '') {
            mobile =
                <li>
                    <strong>Điện thoại:</strong>{company.phone}
                </li>
        }
        let website =
            <li>
                <strong>Website:</strong>Đang cập nhật
            </li>;
        if (company.website !== '') {
            website =
                <li>
                    <strong>Website:</strong>{company.website}
                </li>
        }
        let url = `/companydetail/${company._id}`
        return (
            <Link to={url}>
                <div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {/* Agent box 2start */}
                        <div className="agent-2 clearfix">
                            <div className="col-lg-3 col-md-3 col-sm-4 agent-theme-2">
                                <img src={company.avatar} alt="team-2" className="img-responsive" />
                                {/* social list */}

                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 agent-content">
                                <h3>
                                    {company.companyname}
                                </h3>
                                <ul>
                                    {website}
                                    {address}
                                    <li>
                                        <strong>Email:</strong> {company.email}
                                    </li>
                                    {mobile}

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

export default Company;