import Detail from './components/Detail';
import React, { Component } from 'react';
import MasterList from './components/MasterList';
import './App.css';

const products = require('./Products.json').value;
console.log(products.value);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="masterListContainer">
          <MasterList data={products}/>
        </div>
        {/* <div className="detailContainer">
          <Detail />
        </div> */}
      </div>
    );
  }
}

export default App;
