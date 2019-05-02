import React, {Component} from 'react';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {cart} = value;
          if(cart.length === 0) {
            return (
              <div className='page-wrapper'>
                <span className='page-title align-self-center'>Your Cart is Empty</span>
              </div>
            );
          } else {
            return (
              <div className='page-wrapper'>
                <h3 className='display-4 page-title'>Shopping Cart</h3>
                <CartColumns />
                <CartList value={value} />
                <CartTotal value={value} />
              </div>
            );
          };
        }}
      </ProductConsumer>
    );
  }
}
