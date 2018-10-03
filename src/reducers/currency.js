function changeCurrency (state='RUB', action){
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return action.currency
    default:
      return state
  }
}

export default changeCurrency;
