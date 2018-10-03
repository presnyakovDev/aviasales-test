import React, { Component } from 'react';
import { fetchTickets } from '../actions';
import { Ticket } from './Ticket.js';

class TicketList extends Component{

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.props.dispatch(fetchTickets(result.tickets));
        },
        (error) => {
          console.error(error);
        }
      )
  }

  render(){
    const { tickets } = this.props
    return(
      <div>
      {tickets.length ? tickets.map((item)=>
        <Ticket ticket={item}/>
      ) : <div class="ticket__container">Ни один билет не соответствует заданным фильтрам.</div>}
      </div>
    )
  }
}

export default TicketList;
