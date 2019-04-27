import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar fixed-top d-flex justify-content-between'>

        <Link to='/products'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill='currentcolor' d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>
        </Link>

        <Link to='/'>
          <img src={logo} alt="brand logo" className='d-md-none navbar-brand'/>
          <span className='navbar-title d-none d-md-inline-block'>Stylish Soaps</span>
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
