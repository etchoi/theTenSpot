import React, { Component } from 'react';
import NavBar from '../components/navbar';
import MainBanner from '../components/main_banner';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainBanner />
      </div>
    );
  }
}
