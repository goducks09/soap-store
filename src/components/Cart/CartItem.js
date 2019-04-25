import React from 'react';

export default function CartItem({item, value}) {
  const {count, id, img, img_thumb, price, title, total} = item;
  const {decrement, increment, removeItem} = value;

  return (
    <div className='row justify-content-center text-center flex-nowrap'>
      <div className='col col-sm-6 col-md-3 col-lg-2 text-center'>
        <img src={img_thumb} className='mx-lg-auto' alt='bar of soap'/>
      </div>

      <div className='cart-info-container text-white col col-sm-4 col-lg-10'>
        <span className='col-lg-2 mx-lg-auto'><strong>{title}</strong></span>

        <span className='col-lg-2 mx-lg-auto'>${price}</span>

        <div className='d-flex justify-content-center col-lg-2 mx-lg-auto'>
          <div>
            <button className='btn mx-1' onClick={() => decrement(id)}>-</button>
            <span>{count}</span>
            <button className='btn mx-1' onClick={() => increment(id)}>+</button>
          </div>
        </div>

        <div onClick={() => removeItem(id)} className='col-lg-2 mx-lg-auto'>
          <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
          </svg>
        </div>

        <span className='d-none d-lg-block col-lg-2 mx-lg-auto'><strong>Item total: ${total}</strong></span>
      </div>
    </div>
  );
}
