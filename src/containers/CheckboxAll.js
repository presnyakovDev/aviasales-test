import React from 'react';
import { connect } from 'react-redux';
import { removeAllFilters } from '../actions';

class CheckboxAll extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleChange(){
    if(this.input.current.checked){
      this.props.removeAllFilters()
    }else{
      this.props.ownProps.addAll()
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

function mapStateToProps(state, ownProps){
  return {
    ownProps: ownProps,
    checked: () => !Boolean(state.filters.length)
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    removeAllFilters: () => dispatch(removeAllFilters())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxAll)
