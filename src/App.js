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
      loading: true,
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
    axios.get(`https://cors-anywhere.herokuapp.com/http://northwind.servicestack.net/customers.json`)
      .then(function(res) {
        customers = res.data.Customers;
        this.setState({
          loading: false,
          customers: res.data.Customers,
          selectedCustomer: res.data.Customers[0]
        });
      }.bind(this))
      .catch(function(err) {
        console.log(err);
      });
  }
  renderLoading() {
    return <div>Loading...</div>;
  }
  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else {
      return (
        <div className="App-container">
          <Header />
          <div className="MasterList-container">
            <MasterList data={this.state.customers} showDetail={this.showDetail} loading={this.state.loading}/>
          </div>
          <div className="Detail-container">
            <Detail data={this.state.selectedCustomer}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
