import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';


import './livelibs.css';



class LiVelibs extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <div className="liVelibs">

		  
  		  <CollectionItem href='#'><i className="material-icons">place</i> <span>{this.props.name}</span></CollectionItem>
  		  
        <div className="info-container">
          <Gmaps
            width={'800px'}
            height={'600px'}
            lat={this.props.lat}
            lng={this.props.lng}
            zoom={15}
            loadingMessage={'Be happy'}
            params={{v: '3.exp', key: 'AIzaSyB5X1l-Ij7FBy1HDJGlf0C1ovPSVYCQH4s'}}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={this.props.lat}
              lng={this.props.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            <InfoWindow
              lat={this.props.lat}
              lng={this.props.lng}
              content={this.props.address}
              onCloseClick={this.onCloseClick} />
          </Gmaps>
          <p>Total des vélos pour cette station: {this.props.total}</p>
          <p>Total des vélos disponibles: {this.props.availableBikes}</p>
          <p>Total des places : {this.props.place}</p>
        </div>



      </div>
    );
  }
}

export default LiVelibs;