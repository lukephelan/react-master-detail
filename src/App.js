import Detail from './components/Detail';
import Header from './components/Header';
import React, { Component } from 'react';
import MasterList from './components/MasterList';
import './App.css';

const products = require('./Products.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.value,
      selectedProduct: products.value[0]
    }
    this.showDetail = this.showDetail.bind(this);
  }
  showDetail(i) {
    // Change selected product
    this.setState({
      selectedProduct: products.value[i]
    });
  }
  render() {
    return (
      <div className="App-container">
        <Header />
        <div className="masterListContainer">
          <MasterList data={this.state.products} showDetail={this.showDetail}/>
        </div>
        <div className="detailContainer">
          <Detail data={this.state.selectedProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
