import React, { Component } from "react";

import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });

    this.setState(() => ({ products }));
  };

  handleDetail = id => {
    const detailProduct = this.getItem(id);
    this.setState(() => ({ detailProduct }));
  };

  getItem = id => this.state.products.find(item => item.id === id);

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => ({
        products: tempProducts,
        cart: [...this.state.cart, product]
      }),
      this.addTotals,
      () => console.log(this.state)
    );
  };

  openModal = id => {
    const modalProduct = this.getItem(id);
    this.setState(() => ({ modalOpen: true, modalProduct }));
  };

  closeModal = id => {
    this.setState(() => ({ modalOpen: false }));
  };

  increment = id => {
    const cart = [...this.state.cart];
    const item = cart.find(item => item.id === id);
    const index = cart.indexOf(item);
    const product = cart[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(() => ({ cart }), this.addTotals);
  };

  decrement = id => {
    const cart = [...this.state.cart];
    const item = cart.find(item => item.id === id);
    const index = cart.indexOf(item);
    const product = cart[index];
    product.count -= 1;
    if (product.count !== 0) {
      product.total = product.count * product.price;
      this.setState(() => ({ cart }), this.addTotals);
    } else {
      this.removeItem(id);
    }
  };

  removeItem = id => {
    const cart = this.state.cart.filter(item => item.id !== id);
    const products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const removedProduct = products[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => ({
        cart,
        products
      }),
      this.addTotals
    );
  };

  clearCart = () => {
    this.setState(
      () => ({
        cart: []
      }),
      () => {
        this.setProducts();
        this.addTotals();
        console.log(this.state.total);
      }
    );
  };

  addTotals = () => {
    let cartSubtotal = this.state.cart.reduce(
      (sub, item) => (sub += item.total),
      0
    );
    const tempTax = cartSubtotal * 0.2;
    const cartTax = parseFloat(tempTax.toFixed(2));
    const cartTotal = cartSubtotal + cartTax;
    console.log(cartSubtotal, cartTax, cartTotal);
    this.setState(() => ({
      cartSubtotal,
      cartTax,
      cartTotal
    }));
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
