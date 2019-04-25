/* eslint-disable */
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import moment from 'moment'

export class SingleNews extends Component {
  render() {
    var { news } = this.props;
    console.log(news);
    
    return (
      <Link to={`/news/${news._id}`}>
        <tr>
          <td className="title-container">
            <img src="img/my-properties/my-properties-1.jpg" alt="my-properties-1" className="img-responsive hidden-xs" />
            <div className="title">
              <h4><a href="true">{news.title}</a></h4>
              {/* <span>{news.content}</span> */}
              {/* <span><i className="fa fa-map-marker" /> 123 Kathal St. Tampa City, </span>
              <span className="table-property-price">$900 / monthly</span> */}
            </div>
          </td>
          <td className="expire-date hidden-xs">{moment.unix(news.updateTime).format('DD/MM/YYYY, h:mm a')}</td>
          {/* <td className="action">
            <a href="#"><i className="fa fa-pencil" /> Edit</a>
            <a href="#"><i className="fa  fa-eye-slash" /> Hide</a>
            <a href="#" className="delete"><i className="fa fa-remove" /> Delete</a>
          </td> */}
        </tr>
        </Link>
    )
  }
}

export default (withRouter(SingleNews));
