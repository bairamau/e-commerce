import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { storeProducts } from "../data";

export default class ProductList extends Component {
  state = {
    items: storeProducts
  };
  render() {
    console.log(this.state.items);
    return (
      <React.Fragment>
        <Title title="products" />
      </React.Fragment>
    );
  }
}
