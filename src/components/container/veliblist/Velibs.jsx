import React, { Component } from 'react';


import SearchForm from './SearchForm';
import './velibs.css';
import UlVelibs from './UlVelibs';




class Velibs extends Component {



  render() {
    return (
      <div className="velib-container">
		<SearchForm />
		<UlVelibs />

      </div>
    );
  }
}

export default Velibs;