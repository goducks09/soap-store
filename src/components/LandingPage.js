import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div id='hero' className='landing text-center pt-5'>
        <h1 className='display-1 font-weight-bold'>Stylish Soaps</h1>

        <Link to='/products' className='fixed-bottom mb-5'>
          <svg id="i-chevron-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M30 12 L16 24 2 12" />
          </svg>
        </Link>
      </div>
    );
  }
}
