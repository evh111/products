import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
    <tr>
        <td>{props.product.product_name}</td>
        <td>{props.product.product_price}</td>
        <td>
            <Link to={'/update/'+props.product._id}>Edit</Link>
        </td>
    </tr>
)

export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    ProductList() {
        return this.state.products.map(function(currentProduct, i) {
            return <Product product={currentProduct} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h2>Product List</h2>
                <table className='table table-striped' style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ProductList() }
                    </tbody>
                </table>
            </div>
        )
    }
}