import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../actions';
import Checkbox from '../components/Checkbox';


function mapStateToProps(state, ownProps) {
  return {
    ownProps: ownProps,
    checked: () => !state.filters.includes(ownProps.value)
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    addFilter: () => dispatch(addFilter(ownProps.value)),
    removeFilter: () => dispatch(removeFilter(ownProps.value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox)
