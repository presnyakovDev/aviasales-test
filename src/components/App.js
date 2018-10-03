import React, { Component } from 'react';
import TicketList from '../containers/TicketList.js';
import CheckboxList from '../containers/FilterCheckboxList.js';
import ChangeCurrencyTabs from '../containers/ChangeCurrencyTabs.js';

class App extends Component{
  render(){
    return(
      <div className="app">
        <div className="app__manage-panel">
          <div className="filters">
            <div className="filters__item">
              <div className="filters__header">Валюта</div>
              <div className="filters__content">
                <ChangeCurrencyTabs/>
              </div>
            </div>
            <div className="filters__item">
              <div className="filters__header">Количество пересадок</div>
              <div className="filters__content">
                <CheckboxList />
              </div>
            </div>
          </div>
        </div>
        <div className="app__content">
          <TicketList />
        </div>
      </div>
    )
  }
}

export default App;
