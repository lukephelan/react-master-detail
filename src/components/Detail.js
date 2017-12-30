import React, { Component } from 'react';
import Moment from 'react-moment';
import './Detail.css';

class Detail extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="Detail-object">
                <span>Product Name: {data.Name}<br /></span>
                <span>Product ID: {data.ID}<br /></span>
                <span>Description: {data.Description}<br /></span>
                <span>Price: ${data.Price}<br /></span>
                <span>Rating: {data.Rating}<br /></span>
                <span>Release Date: <Moment date={data.ReleaseDate} format="D/MM/YYYY" /><br /></span>
                <span className={!data.DiscontinuedDate ? "Detail-null-discontinued-value" : ""}>Discontinued Date: <Moment date={data.DiscontinuedDate} format="D/MM/YYYY" /></span>
            </div>
        );
    }
}

export default Detail;