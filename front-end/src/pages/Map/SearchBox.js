/* global google */
import React, { Component } from 'react'

export default class Searching extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.onPlaceChanged = this.onPlaceChanged.bind(this)
      }
    
      componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(this.searchInput.current)
        this.searchBox.addListener('places_changed', this.onPlaceChanged)
      }

      onPlaceChanged(){
        const place = this.searchBox.getPlaces()
        this.props.onPlaceChanged(place);
      }
    
      render() {
        return (
          <input
            ref={this.searchInput}
            id="searchbox"
            placeholder="Nhập địa chỉ chi tiết ở đây..."
            type="text"
            style={{width: '100%', height: '34px', border: '2px solid #84ad1d', borderRadius: '5px', fontSize:'12px'}}
          />
        );
      }
}
 