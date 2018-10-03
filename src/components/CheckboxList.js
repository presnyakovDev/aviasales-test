import React, { Component } from 'react';
import Checkbox from '../containers/FiltersCheckbox.js';
import CheckboxAll from '../containers/CheckboxAll.js';

export class CheckboxList extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return(
      <div>
        <CheckboxAll label="Все" id="all" addAll={this.props.addAllFilters}/>
        {this.props.filtersCheckboxs.map(f=>
          <Checkbox label={f.label} id={f.id} value={f.filterValue} />
        )}
      </div>
    )
  }
}
