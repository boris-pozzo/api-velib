import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize';


import './livelibs.css';



class LiVelibs extends Component {



  render() {
    return (
      <div className="liVelibs">

		  
		  <CollectionItem href='#'><i className="material-icons">place</i> <span>{this.props.name}</span></CollectionItem>
		  
      </div>
    );
  }
}

export default LiVelibs;