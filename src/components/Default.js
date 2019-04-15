import React, {Component} from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-title pt-5'>
            <h2>404 error</h2>
            <p>
              The page, {this.props.location.pathname}, was not found.<br/>
              Please check the URL.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
