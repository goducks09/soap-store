import React, { Component } from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import About from './components/About';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {

  render() {
    const {location} = this.props;
    const currentKey = location.pathname.split('/')[1] || '/';

    return (
      <React.Fragment>
        {currentKey !== '/' ? <Nav /> : null}

        <TransitionGroup component={null}>
          <CSSTransition appear key={currentKey} classNames='fade' timeout={{enter: 300, exit: 200}}>

              <Switch location={location}>
                <Route path='/' exact component={LandingPage} />
                <Route path='/products' component={ProductList} />
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route path='/about' component={About} />
                <Route component={Default} />
              </Switch>

          </CSSTransition>
        </TransitionGroup>

        <Modal />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
