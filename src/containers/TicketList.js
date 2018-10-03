import { connect } from 'react-redux';
import TicketList from '../components/TicketList';

function getTickets (tickets, filters) {

  function filterFunc(ticket){
    return filters.includes(ticket.stops) ? false : true
  }

  return tickets.filter(filterFunc)
}

function mapStateToProps(state){
  return {
    tickets: getTickets(state.tickets, state.filters)
  }
}

export default connect(
  mapStateToProps,
)(TicketList)
