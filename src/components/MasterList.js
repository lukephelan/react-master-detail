import React, { Component } from 'react';

class MasterList extends Component {
    render() {
        const { data } = this.props;
        const row = data.map((data) =>
            <tr key={data.ID} onClick={() => { this.props.showDetail(data.ID) }}>
                <td key={data.Name}>{data.Name}</td>
                <td key={data.Price} className="masterListPriceColumn">${Math.round(data.Price).toFixed(2)}</td>
            </tr>
        );
        return (
            <table className="masterListTable">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th className="masterListPriceColumn">Price</th>
                    </tr>
                    {row}
                </tbody>
            </table>
        )
    }
}

export default MasterList;