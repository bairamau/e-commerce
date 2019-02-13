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
    cartSubTotal: 0,
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
    console.log(`increment id${id}`);
  };

  decrement = id => {
    console.log(`decrement id${id}`);
  };

  removeItem = id => {
    console.log(`remove id${id}`);
  };

  clearCart = () => {
    console.log("cleared");
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
