import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const {id, img, title} = this.props.product;

    return (
      <ProductConsumer>
      {(value) => (
        <div className='card-container d-flex flex-column flex-nowrap align-items-center mx-2 mb-5 cursor-pointer' onClick={() => value.openModal(id)}>
          <React.Fragment>
            <div className='card m-1 text-center justify-content-center' style={{background: `center /cover no-repeat url(${img})`}}>
              <div className='info-container'>
                <svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M16 14 L16 23 M16 8 L16 10" />
                  <circle cx="16" cy="16" r="14" />
                </svg>
              </div>
            </div>
            <h3>{title}</h3>
          </React.Fragment>
        </div>
      )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};
