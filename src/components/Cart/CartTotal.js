import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
  const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='d-flex flex-column col-12 col-md-10 mb-2 ml-lg-auto px-5 text-white text-right'>
            <span>Subtotal: {cartSubtotal}</span>
            <span>Tax: {cartTax}</span>
            <span><strong>Total: {cartTotal}</strong></span>
          </div>

          <div className='col-12 my-2 ml-md-auto text-right text-md-center text-lg-right'>
            <button className='m-2 px-5' type='button'>
              <Link to='/products'>
                Continue Shopping
              </Link>
            </button>

            <button className='btn-outline-danger text-uppercase m-2 px-5' type='button' onClick={() => clearCart()}>
              <Link to='/'>
                Clear Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
