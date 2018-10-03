import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BuyButton extends Component {

  getCurrencyIcon(){
    switch (this.props.currency) {
      case 'RUB':
        return ' ₽'
      case 'USD':
        return ' $'
      case 'EUR':
        return ' €'
      default:
        return '';
    }
  }

  getPrice(){
    switch (this.props.currency) {
      case 'RUB':
        return this.props.price
      case 'USD':
        return Math.round(this.props.price/65)
      case 'EUR':
        return Math.round(this.props.price/75)
      default:
        return this.props.price;
    }
  }

  render(){
    return(
      <div className="ticket__buy-col">
      <img alt="turkish airlines logo" className="carrier-img" src="Turkish-Airlines.png" />
        <button className="buy-button__button">
          <span className="buy-button__text">Купить</span>
          <span className="buy-button__price">
            <span className="buy-button__price-divider">за </span>
            <span className="buy-button__price-num">
              <span className="price --rub">{this.getPrice()}{this.getCurrencyIcon()}</span>
            </span>
          </span>
        </button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    'currency': state.currency,
    'price': ownProps.price
  }
}

export default connect(
  mapStateToProps
)(BuyButton)
