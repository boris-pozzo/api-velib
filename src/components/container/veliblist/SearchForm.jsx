import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';





class SearchForm extends Component {

  render() {
    return (
      <div className="searchform-container">
		<Row>
		  <Input className="input" s={10} label="Search a velib station" validate><Icon>search</Icon></Input>
		</Row>
      </div>
    );
  }
}

export default SearchForm;