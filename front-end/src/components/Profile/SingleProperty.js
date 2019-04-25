/* eslint-disable */
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import moment from 'moment'

export class SingleProperty extends Component {
  render() {
    let {estateListOfUser} = this.props
    console.log(estateListOfUser)
    return (
      // <Link to={`/myproperties/${news._id}`}>
        <tr>
          <td className="title-container">
            <img src="img/my-properties/my-properties-1.jpg" alt="my-properties-1" className="img-responsive hidden-xs" />
            <div className="title">
              <h4><a href="true">ABC</a></h4>
              <span>XYZ</span>
              <span><i className="fa fa-map-marker" /> 123 Kathal St. Tampa City, </span>
              <span className="table-property-price">$900 / monthly</span>
            </div>
          </td>
          <td className="expire-date hidden-xs">moment.unix(news.updateTime).format('DD/MM/YYYY, h:mm a')</td>
          <td className="action">
            <a href="#"><i className="fa fa-pencil" /> Edit</a>
            <a href="#"><i className="fa  fa-eye-slash" /> Hide</a>
            <a href="#" className="delete"><i className="fa fa-remove" /> Delete</a>
          </td>
        </tr>
        // </Link>
    )
  }
}

export default (withRouter(SingleProperty));
