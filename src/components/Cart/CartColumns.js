import React from 'react';

export default function CartColumns() {
  return (
    <div className='container-fluid text-center d-none d-lg-block text-underline'>

      <div className='row'>
        <div className='col-2 mx-auto'>
          <p>Product</p>
        </div>

        <div className='col-2 mx-auto'>
          <p>Product Name</p>
        </div>

        <div className='col-2 mx-auto'>
          <p>Price</p>
        </div>

        <div className='col-2 mx-auto'>
          <p>Quantity</p>
        </div>

        <div className='col-2 mx-auto'>
          <p>Remove</p>
        </div>

        <div className='col-2 mx-auto'>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
}
