/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'antd'
import moment from 'moment'

export default class SingleEstateListView extends Component {
    render() {
        let { estate } = this.props;
        let status = 'Bán'
        if(estate.statusProject === 3){
            status = 'Cho Thuê'
        }
        return (
            <Link to={`/properties/${estate._id}`}>
                <div>
                    <div className="property clearfix ">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-pad">
                            {/* Property img */}
                            <div className="property-img">
                                <div className="property-tag button alt featured">{status}</div>
                                {/* <div className="property-tag button sale">For Sale</div> */}
                                <div className="property-price">{estate.price}$</div>
                                <img style={{ height: '244px' }} src={estate.url[0]} alt="fp-list" className="img-responsive hp-1" />
                                
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 property-content ">
                            {/* title */}
                            <h2 className="title" style={{ marginTop: '8px', fontSize: '17px' }}>
                                <a href="true">{estate.name}</a>
                            </h2>
                            <p style={{
                                width: '100%',
                                overflow: 'hidden',
                                textOverflow: "ellipsis",
                                lineHeight: '16px',
                                WebkitLineClamp: '2',
                                display: 'webkit-box',
                                WebkitBoxOrient: 'vertical',
                                height: '32px'
                            }}>{estate.info}</p>
                            {/* Property address */}
                            <h6 style={{ fontSize: '13px' }}>
                                <b>Địa chỉ:</b> {estate.address}
                            </h6>
                            <h6 style={{ fontSize: '13px' }}>
                                <b>Diện tích:</b> {estate.area} m2
                            </h6>

                            {/* Property footer */}
                            <div className="property-footer">
                                <span className="left">
                                    <a href="true"><i className="fa fa-user" />{estate.investor}</a>
                                </span>
                                <span className="right">
                                    <Tag style={{ fontSize: '13px' }} color='green'>
                                        <p style={{ fontSize: '13px', margin: 'auto', color: 'green', textAlign: 'center' }}><strong>Đăng ngày:</strong>{moment.unix(estate.updateTime).format('DD/MM/YYYY')}</p></Tag>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
