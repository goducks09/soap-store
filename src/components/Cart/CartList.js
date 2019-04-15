import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
  return (
    <React.Fragment>
      {value.cart.map(item => {
        return (
          <div className='container-fluid m-3 m-sm-4 m-lg-0'>
            <CartItem key={item.id} item={item} value={value}/>
          </div>
        );
      })
      }
    </React.Fragment>
  );
}
