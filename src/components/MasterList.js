import React, { Component } from 'react';
import './MasterList.css';

class MasterList extends Component {
    renderLoading() {
        return <div>Loading...</div>;
    }
    render() {
        if (this.props.selectedCustomer) {
            return this.renderLoading();
        } else {
            const { data } = this.props;
            const row = data.map((data) =>
                <tr key={data.Id} onClick={() => { this.props.showDetail(data) }}>
                    <td className="Masterlist-td" key={data.Id}>{data.CompanyName}</td>
                </tr>
            );
            return (
                <table>
                    <tbody>
                        <tr>
                            <th className="Masterlist-th">Customer</th>
                        </tr>
                        {row}
                    </tbody>
                </table>
            )
        }
    }
}

export default MasterList;