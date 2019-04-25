import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class About extends Component {
  state = {
    animateMenu: false
  };

  animateMenu = () => {
    this.setState(prevState => ({
      animateMenu: !prevState.animateMenu
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h2 className='page-title display-3 font-weight-bold'>About Us</h2>

        <p className='text-white text-center mx-5'>
          Pellentesque quam est, auctor ut neque ac, lacinia posuere nisi. Nunc enim mauris, sagittis sed tortor eu, tristique tristique erat. Donec consectetur euismod sem vel laoreet. Donec vitae neque rutrum lectus faucibus aliquet. Nam vel odio vitae diam venenatis facilisis. Quisque imperdiet pellentesque orci a sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed cursus nibh non ultricies aliquam.
        </p>

        <TransitionGroup component={null}>
          <div className='help d-flex align-items-center justify-content-center'>
            <h3>Need Help?</h3>
              <div className='dropdown position-relative ml-2 ml-sm-4'>
                <button className='help-menu' type='button' onClick={(e) => {e.target.classList.toggle('show'); this.animateMenu()}}>
                  Select a topic
                </button>
                <CSSTransition in={this.state.animateMenu} classNames='fade' timeout={{enter: 300, exit: 200}}>
                  <div className='dropdown-menu' onClick={(e) => {e.stopPropagation()}}>
                    <button className='dropdown-item' type='button'>Order Status</button>
                    <button className='dropdown-item' type='button'>Payment Questions</button>
                    <button className='dropdown-item' type='button'>Contact Us</button>
                  </div>
                </CSSTransition>
              </div>
          </div>
        </TransitionGroup>

      </React.Fragment>
    );
  }
}
