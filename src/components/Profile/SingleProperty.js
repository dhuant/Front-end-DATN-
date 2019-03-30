import React, { Component } from 'react'

export default class SingleProperty extends Component {
  render() {
    return (
      <div>
        <tr>
          <td className="title-container">
            <img src="img/my-properties/my-properties-1.jpg" alt="my-properties-1" className="img-responsive hidden-xs" />
            <div className="title">
              <h4><a href="#">beautiful  Family  home </a></h4>
              <span><i className="fa fa-map-marker" /> 123 Kathal St. Tampa City, </span>
              <span className="table-property-price">$900 / monthly</span>
            </div>
          </td>
          <td className="expire-date hidden-xs">December 17 2017</td>
          <td className="action">
            <a href="#"><i className="fa fa-pencil" /> Edit</a>
            <a href="#"><i className="fa  fa-eye-slash" /> Hide</a>
            <a href="#" className="delete"><i className="fa fa-remove" /> Delete</a>
          </td>
        </tr>
      </div>
    )
  }
}
