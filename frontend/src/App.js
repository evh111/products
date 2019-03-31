import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProduct from './components/create-product.component';
import EditProduct from './components/edit-product.component';
import ProductList from './components/product-list.component';

class App extends Component {
  render()  {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <Link to='/' className='navbar-brand'>Product App</Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>Catalogue</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>Add Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path='/' exact component={ProductList} />
          <Route path='/update/:id' component={EditProduct} />
          <Route path='/create' component={CreateProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
