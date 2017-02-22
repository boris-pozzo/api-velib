import React, { Component } from "react";
import { Collection } from "react-materialize";
import axios from "axios";

import LiVelibs from "./LiVelibs";

class UlVelibs extends Component {
  constructor() {
    super();
    this.state = {
      stations: []
    };
  }

  //appel a l'api

  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/31008?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        ),
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/43004?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        ),
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/4017?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        ),
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/4103?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        ),
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/4018?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        ),
        axios.get(
          "https://api.jcdecaux.com/vls/v1/stations/4016?contract=paris&apiKey=2715040420d4c2362e674804d96c430916c28542"
        )
      ])
      .then(
        axios.spread((
          resSimplon1,
          resSimplon2,
          resHDV1,
          resHDV2,
          resHDV3,
          resHDV4
        ) => {
          this.setState({
            stations: [
              resSimplon1.data,
              resSimplon2.data,
              resHDV1.data,
              resHDV2.data,
              resHDV3.data,
              resHDV4.data
            ]
          });
        })
      )
      .catch(error => {
        console.log("Error with the data:", error);
      });
  }

  //Map des donnees

  ListVelibs() {
    return this.state.stations.map((el, i) => {
      return (
        <LiVelibs
          name={el.name}
          key={i}
          lat={el.position.lat}
          lng={el.position.lng}
          address={el.address}
          total={el.bike_stands}
          availableBikes={el.available_bikes}
          place={el.available_bike_stands}
        />
      );
    });
  }

  render() {
    let velibs = this.ListVelibs();

    return (
      <div className="UlVelibs">

        <Collection>
          {velibs}
        </Collection>

      </div>
    );
  }
}

export default UlVelibs;
