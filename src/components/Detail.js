import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="Detail-object">
                <table className="Detail-table">
                    <tbody>
                        <tr>
                            <th>Company Name:</th>
                            <td>{data.CompanyName}</td>
                        </tr>
                        <tr>
                            <th>Address:</th>
                            <td>{data.Address}</td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td>{data.City}</td>
                        </tr>
                        <tr>
                            <th>Postal Code:</th>
                            <td>{data.PostalCode}</td>
                        </tr>
                        <tr>
                            <th>Country:</th>
                            <td>{data.Country}</td>
                        </tr>
                        <tr>
                            <th>Contact:</th>
                            <td>{data.ContactName}</td>
                        </tr>
                        <tr>
                            <th>Title:</th>
                            <td>{data.ContactTitle}</td>
                        </tr>
                        <tr>
                            <th>Phone:</th>
                            <td>{data.Phone}</td>
                        </tr>
                        <tr>
                            <th>Fax:</th>
                            <td>{data.Fax}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Detail;