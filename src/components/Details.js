import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div>
                <h1>{title}</h1>
                <img src={img} alt="product" />
                <h2>model: {title}</h2>
                <h4>made by: {company}</h4>
                <h4>price: ${price}</h4>
                <p>{info}</p>
                <Link to="/">
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
                <ButtonContainer
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                  cart
                >
                  {inCart ? "in Cart" : "add to cart"}
                </ButtonContainer>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
