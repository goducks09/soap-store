import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render () {
    return (
      <ProductConsumer>
        { value => {
          const {modalOpen, closeModal} = value;
          const {id, img, inCart, price, title} = value.modalProduct;

          if(!modalOpen) {
            return null;
          } else {
            return (
              <React.Fragment>
                <div id='modal-container' className='container-fluid'>
                  <div className='row'>
                    <div id='modal' className='col-8 d-flex flex-column justify-content-between text-center mx-auto p-5'>
                      <h4 className='mb-3'>{title}</h4>
                      <img src={img} className='img-fluid' alt='product image'/>
                      <h5 className='text-muted my-3'>Price: ${price}</h5>


                      <button className='mb-2' onClick= {() => {value.handleDetail(id); closeModal()}}>
                        <Link to='/details'>Additional Details</Link>
                      </button>

                      <button className='mb-2' onClick= {() => closeModal()}>
                        <Link to='/products'>Continue Shopping</Link>
                      </button>

                      <button disabled={inCart} onClick={() => value.addToCart(id)}>
                        {inCart ? (
                            <Link to='/cart' onClick={() => closeModal()}>View In Cart</Link>
                        ) : (
                          <span>Add to Cart</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }}
      </ProductConsumer>
    );
  };
}
