import { connect } from 'react-redux';
import { changeCurrency } from '../actions';
import { CurrencyTabs } from '../components/CurrencyTabs.js';

function mapStateToProps(state){
  return { currency: state.currency }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    onClick: (value) => dispatch(changeCurrency(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyTabs)
