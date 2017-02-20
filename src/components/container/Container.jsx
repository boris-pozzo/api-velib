import React, { Component } from 'react';
import './container.css';
import Velibs from './veliblist/Velibs'
import Map from './map/Map'

class Container extends Component {
  render() {
    return (
      <div className="container">
       	<Velibs />
       	<Map />
      </div>
    );
  }
}

export default Container;