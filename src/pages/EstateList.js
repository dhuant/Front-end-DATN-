import React, { Component } from 'react'
import EstateListComp from '../components/Properties/EstateListComp'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';

export default class EstateList extends Component {
  render() {
    
    return (
      <div>
        <Header />
        <MainHeader />
        <EstateListComp />
        <Footer />
      </div>
    )
  }
}
