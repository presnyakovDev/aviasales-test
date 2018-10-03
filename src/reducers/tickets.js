function fetchTickets (state=[], action){
  switch (action.type) {
    case 'FETCH_TICKETS':
      return action.tickets
    default:
      return state
  }
}

export default fetchTickets;
