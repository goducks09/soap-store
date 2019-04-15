import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path exact='/' component={LandingPage} />
          <Route path='/products' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
