import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) => {
            const {id, img, info, price, title, inCart} = value.productDetail;
            return (
              <div className='conatiner-fluid py-5'>
                <div className='row no-gutters'>
                  <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h2 className='display-3'>{title}</h2>
                  </div>
                </div>

                {/* product img */}
                <div className='row no-gutters align-items-center px-3'>
                  <div className='col-10 col-md-4 mx-auto text-center my-3'>
                    <img src={img} className='img-fluid' alt='bar of soap' />
                  </div>

                  {/* product info */}
                  <div className='col-10 col-md-6 mx-auto text-center my-3'>
                    <h3 className='mt-3 mb-2'>Price: ${price}</h3>

                    <p className='lead'>{info}</p>

                    {/* cart buttons */}
                    <div className='d-flex justify-content-around justify-content-xl-center mt-5'>
                      <button className='mx-xl-3'>
                        <Link to='/products'>
                          Continue Shopping
                        </Link>
                      </button>

                      <button disabled={inCart} onClick={ () => {
                        value.addToCart(id);
                        console.log(value);
                      }} className='mx-xl-3'>
                        {inCart ? (<Link to='/cart'>View In Cart</Link>) : ("Add to Cart")}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    );
  }
}
