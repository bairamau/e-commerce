import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";

import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Title title="products" />
        <ProductConsumer>
          {store => (
            <ListWrapper>
              {store.products.map(product => (
                <li key={product.id}>
                  <Product product={product} />
                </li>
              ))}
            </ListWrapper>
          )}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

const ListWrapper = styled.ul`
  margin:0;
  padding:0 0 30px 0;
  display: grid;
  grid-gap: 10px;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-items:center;
  justify-content:center;
`;
