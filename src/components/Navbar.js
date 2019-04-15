import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import productIcon from '../product-icon.png';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar fixed-top d-flex justify-content-between'>

        <Link to='/products'>
          <img src={productIcon} alt='product icon'/>
        </Link>

        <Link to='/'>
          <img src={logo} alt="brand logo" className='navbar-brand'/>
        </Link>

        <Link to='/cart'>
        <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
  <circle cx="25" cy="27" r="2" />
  <circle cx="12" cy="27" r="2" />
</svg>
        </Link>
      </nav>
    );
  }
}
