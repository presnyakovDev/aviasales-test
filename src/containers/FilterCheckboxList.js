import { connect } from 'react-redux';
import { CheckboxList } from '../components/CheckboxList';
import { addAllFilters } from '../actions';

const FiltersCheckboxs = [
  { label:" Без пересадок", id: "nothing", filterValue:0 },
  { label: "1 пересадка", id: "one", filterValue:1 },
  { label: "2 пересадка", id: "two", filterValue:2 },
  { label: "3 пересадки", id: "three", filterValue:3 }
];

function mapStateToProps (state, ownProps){
  return {
    ownProps:ownProps,
    filtersCheckboxs: FiltersCheckboxs
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    addAllFilters: () => dispatch(addAllFilters(FiltersCheckboxs.map(f => f.filterValue)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxList)
