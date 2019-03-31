import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_price: '',
        }
    }

    onChangeProductName(e) {
        this.setState({
            product_name: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState({
            product_price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.product_name}`);
        console.log(`Price: ${this.state.product_price}`);

        const newProduct = {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
        };

        axios.post('http://localhost:4000/products/create', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            product_name: '',
            product_price: ''
        })

        this.props.history.push('/')
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h2>New Product</h2>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.product_name}
                            onChange={this.onChangeProductName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Price: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.product_price}
                            onChange={this.onChangeProductPrice}
                        />
                    </div>
                    <br />
                    <div className='form-group'>
                        <input type='submit' value='Add Product' className='btn btn-dark' />
                    </div>
                </form>
            </div>
        )
    }
}