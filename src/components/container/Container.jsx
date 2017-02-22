import React, { Component } from "react";
import "./container.css";

import SearchForm from "./veliblist/SearchForm";
import UlVelibs from "./veliblist/UlVelibs";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <UlVelibs />
      </div>
    );
  }
}

export default Container;
