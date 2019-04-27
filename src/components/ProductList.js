import React, {Component} from 'react';
import Product from "./Product";
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class ProductList extends Component {

  render() {
    return (
      <div className='product-list'>
        <h2 className='page-title display-3'>Products</h2>

        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>

        <div className='fixed-bottom text-right p-3'>
          <Link to='/about'>
            Help
          </Link>
        </div>
      </div>
    );
  }
}
