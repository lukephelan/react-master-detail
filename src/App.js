import axios from 'axios';
import Detail from './components/Detail';
import Header from './components/Header';
import React, { Component } from 'react';
import MasterList from './components/MasterList';
import './App.css';

let customers = [{}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: customers,
      selectedCustomer: customers[0]
    }
    this.showDetail = this.showDetail.bind(this);
  }
  showDetail(customer) {
    // Change selected customer
    this.setState({
      selectedCustomer: customer
    });
  }
  componentDidMount() {
    console.log("Component mounted");
    axios.get(`https://cors-anywhere.herokuapp.com/https://northwind.servicestack.net/customers.json`)
      .then(function(res) {
        customers = res.data.Customers;
        this.setState({
          customers: res.data.Customers,
          selectedCustomer: res.data.Customers[0]
        });
      }.bind(this))
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App-container">
        <Header />
        <div className="MasterList-container">
          <MasterList data={this.state.customers} showDetail={this.showDetail}/>
        </div>
        <div className="Detail-container">
          <Detail data={this.state.selectedCustomer}/>
        </div>
      </div>
    );
  }
}

export default App;
