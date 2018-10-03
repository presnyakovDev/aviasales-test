export function addFilter(filter){
  return {
    type: 'ADD_FILTERS',
    filter
  }
}

export function removeFilter(filter){
  return {
    type: 'REMOVE_FILTERS',
    filter
  }
}

export function removeAllFilters(){
  return {
    type: 'REMOVE_ALL_FILTERS'
  }
}

export function addAllFilters(filters){
  return {
    type: 'ADD_ALL_FILTERS',
    filters
  }
}

export function fetchTickets(tickets){
  return {
    type: 'FETCH_TICKETS',
    tickets
  }
}

export function changeCurrency(currency) {
  return {
    type: 'CHANGE_CURRENCY',
    currency
  }
}
