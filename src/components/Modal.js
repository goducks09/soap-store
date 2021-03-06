import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

export default class Modal extends Component {
  render () {
    return (
      <ProductConsumer>
        { value => {
          const {modalOpen, closeModal} = value;
          const {id, img, inCart, price, title} = value.modalProduct;

          return (
            <CSSTransition
              appear={true}
              unmountOnExit={true}
              in={modalOpen}
              timeout={{
                enter: 500,
                exit: 300}}
              classNames='modal'>
              <React.Fragment>
                <div id='modal-container' className='container-fluid'>
                  <div className='row'>
                      <div id='modal' className='col-8 d-flex flex-column justify-content-between text-center mx-auto p-5'>
                        <h4 className='mb-3'>{title}</h4>
                        <img src={img} className='img-fluid' alt='bar of soap'/>
                        <h5 className='text-muted my-3'>Price: ${price}</h5>


                        <Link to='/details'>
                          <span className='button mb-2' role='button' onClick= {() => {value.handleDetail(id); closeModal()}}>
                            Additional Details
                          </span>
                        </Link>

                        <button className='mb-2' type='button' onClick= {() => closeModal()}>
                          Continue Shopping
                        </button>


                        {/* conditionally render button based on inCart status*/}
                        {inCart ?
                          (<Link to='/cart' className='button' role='button' onClick={() => {closeModal()}}>View In Cart</Link>) : (<button type='button'
                            onClick={ () => {value.addToCart(id);}}>
                              Add to Cart
                          </button>)
                        }

                      </div>
                  </div>
                </div>
              </React.Fragment>
            </CSSTransition>
          );
        }}
      </ProductConsumer>
    );
  };
}
