import React, { Component } from 'react';

class MasterList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        const row = data.map((data) =>
            <tr key={data.ID}>
                <td key={data.Name}>{data.Name}</td>
                <td key={data.Price} align="right">${Math.round(data.Price).toFixed(2)}</td>
            </tr>
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {row}
                </tbody>
            </table>
        )
    }
}

export default MasterList;