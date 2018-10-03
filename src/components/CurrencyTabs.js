import React, { Component } from 'react';

export class CurrencyTabs extends Component {

  className(currency){
    return "currency__tab" + (currency === this.props.currency ? " active" : '')
  }

  render(){
    return(
      <div className="currency">
        <ul className="currency__tabs">
          <li onClick={()=> this.props.onClick('RUB')} className={this.className('RUB')}>RUB</li>
          <li onClick={()=> this.props.onClick('USD')} className={this.className('USD')}>USD</li>
          <li onClick={()=> this.props.onClick('EUR')} className={this.className('EUR')}>EUR</li>
        </ul>
      </div>
    )
  }
}
