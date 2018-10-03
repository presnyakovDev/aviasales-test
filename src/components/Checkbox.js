import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleChange(){
    if(this.input.current.checked){
      this.props.removeFilter()
    }
    else{
      this.props.addFilter()
    }
  }

  render() {
    return(
        <label className='checkbox-item' htmlFor={this.props.ownProps.id}>
          <span className="checkbox" >
            <input onChange={()=> this.handleChange()} ref={this.input} checked={this.props.checked()} className="checkbox__input" type="checkbox" id={this.props.ownProps.id}/>
            <span className="checkbox__check"></span>
          </span>
          {this.props.ownProps.label}
        </label>
    )
  }
}

export default Checkbox;
