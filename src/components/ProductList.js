import React, {Component} from 'react';
import Product from "./Product";
import { storeProducts } from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <h2 className='page-title display-3 font-weight-bold'>Products</h2>

        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
