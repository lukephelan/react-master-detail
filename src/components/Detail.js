import React, { Component } from 'react';
import Moment from 'react-moment';

class Detail extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                Product Name: {data.Name}<br />
                Product ID: {data.ID}<br />
                Description: {data.Description}<br />
                Price: ${data.Price}<br />
                Rating: {data.Rating}<br />
                Release Date: <Moment date={data.ReleaseDate} format="D/MM/YYYY" /><br />
                Discontinued Date: <Moment date={data.DiscontinuedDate} format="D/MM/YYYY" />
            </div>
        );
    }
}

export default Detail;