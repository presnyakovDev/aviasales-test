import React, { Component } from 'react';
import BuyButton from './BuyButton.js';

export class Ticket extends Component {
  render(){
    return(
      <div className="ticket__container">
        <div className="ticket__buy"><BuyButton price={this.props.ticket.price}/></div>
        <div className="ticket__content">
          <div className="ticket__segments segments">
            <div className="ticket__segment segment">
              <div className="segment-route">
              <div className="segment-route__origin">
                <div className="segment-route__time">{this.props.ticket.departure_time}</div>
                <div className="segment-route__city">{this.props.ticket.origin}, {this.props.ticket.origin_name}</div>
                <div className="segment-route__date">27 окт 2018, Сб</div>
              </div>
              <div className="segment-route__path">
                <div className="segment-route__total-time">{this.props.ticket.stops} пересадка</div>
                <div className="segment-route__stops --stops-1">
                  <div className="segment-route__connector is-active"></div>
                </div>
              </div>
              <div className="segment-route__destination">
                <div className="segment-route__time">{this.props.ticket.arrival_time}</div>
                <div className="segment-route__city">{this.props.ticket.destination}, {this.props.ticket.destination_name}</div>
                <div className="segment-route__date">28 окт 2018, Вс</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
