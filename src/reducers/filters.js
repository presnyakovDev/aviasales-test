function ticketFilter(state = [], action){
  console.log(arguments)
  switch (action.type) {
    case 'ADD_FILTERS':
      return [
        ...state,
        action.filter
      ]
    case 'REMOVE_FILTERS':
      return state.filter(f => f !== action.filter)
    case 'REMOVE_ALL_FILTERS':
      return []
    case 'ADD_ALL_FILTERS':
      console.log(action)
      return action.filters
    default:
      return state
  }
}

export default ticketFilter;
