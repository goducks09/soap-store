import React, {Component} from 'react';
import {storeProducts} from './data';

//Format currency amounts
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetail: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState( () => {
      return {products: tempProducts};
    });
  };

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState( () => {
      return {productDetail: product};
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;

    const price = product.price;
    product.total = price * product.count;

    this.setState( () => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      };
    }, () => {
      this.addTotal();
    });
  };

  openModal = id => {
    const body = document.querySelector('body');
    body.style.overflow = "hidden";

    const product = this.getItem(id);
    this.setState( () => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  };

  closeModal = () => {
    const body = document.querySelector('body');
    body.style.overflow = "unset";

    this.setState( () => {
      return {modalOpen: false};
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(product);
    const item = tempCart[index];

    item.count++;
    item.total = item.price * item.count;

    this.setState(() => {
      return {cart: [...tempCart]};
    }, () => {this.addTotal()}
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(product);
    const item = tempCart[index];

    item.count--;
    if(item.count === 0) {
      this.removeItem(id);
    } else{
      item.total = item.price * item.count;

      this.setState(() => {
        return {cart: [...tempCart]};
      }, () => {this.addTotal()}
      );
    };
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.inCart = false;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
      }, () => {this.addTotal()}
    );
  };

  clearCart = () => {
    this.setState(() => {
      return {
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
      };
    }, () => {this.setProducts();}
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => subTotal += item.total);
    let tax = subTotal * .01;
    let total = subTotal + tax;
    subTotal = formatter.format(subTotal);
    tax = formatter.format(tax);
    total = formatter.format(total);

    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
