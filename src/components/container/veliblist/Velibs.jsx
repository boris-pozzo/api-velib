import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem, Row, Input, Icon} from 'react-materialize';

import './velibs.css';



class Velibs extends Component {

	

  render() {
    return (
      <div className="velib-container">
		<Row>
		  <Input className="input" s={10} label="Search a velib station" validate><Icon>search</Icon></Input>
		</Row>

       	<Collapsible popout>
		  <CollapsibleItem header='First' icon='filter_drama'>
		    Lorem ipsum dolor sit amet.
		  </CollapsibleItem>
		  <CollapsibleItem header='Second sbkqlgfqdfksqdfqblsfvqsrfnshgs' icon='place'>
		    Lorem ipsum dolor sit amet.
		  </CollapsibleItem>
		  <CollapsibleItem header='Third' icon='whatshot'>
		    Lorem ipsum dolor sit amet.
		  </CollapsibleItem>
		</Collapsible>
      </div>
    );
  }
}

export default Velibs;