import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header-container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="Header-title col-md-8">
                            React Master-Detail Application
                        </h1>
                        <p className="Header-intro">
                            This is a master-detail application built with React.
                        </p>
                    </div>
                    <img src={logo} className="Header-logo col-md-4" alt="logo" />
                </div>
            </div>
        );
    }
}

export default Header;