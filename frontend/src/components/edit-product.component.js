import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            product_name: '',
            product_price: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    product_name: response.data.product_name,
                    product_price: response.data.product_price,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            product_name: this.state.product_name,
            product_price: this.state.product_price
        };
        console.log(obj);
        axios.put('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/')
    }

    onDelete(e) {
        e.preventDefault();
        const obj = {
            product_name: this.state.product_name,
            product_price: this.state.product_price
        };
        console.log(obj);
        axios.delete('http://localhost:4000/products/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
            
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2 align='center'>Update Product</h2>
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
                        <input type="submit" value='Update' className='btn btn-dark' />
                    </div>
                    <div className='form-group'>
                        <button onClick={this.onDelete}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}