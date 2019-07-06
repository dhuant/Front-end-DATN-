import React, { Component } from 'react'
import moment from 'moment'

export default class SingleHintProperty extends Component {
    render() {
        const {info} = this.props
        return (
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={info.url[0]} alt="small-properties-1" style={{width: "90px", height: "63px"}}/>
                </div>
                <div className="media-body">
                    <h3 className="media-heading">
                        <a href={`/properties/${info._id}`}>{info.name}</a>
                    </h3>
                    <p>{moment.unix(info.updateTime).format('DD/MM/YYYY')}</p>
                    <div className="price">
                        {info.price >= 1000 && info.statusProject === 1 ? `${info.price/1000} Tỉ` : info.price + ' ' + info.unit}
                    </div>
                </div>
            </div>

        )
    }
}
