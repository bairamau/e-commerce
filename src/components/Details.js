import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

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
              <DetailsWrapper>
                <h2>{title}</h2>
                <div className="info">
                  <div className="img">
                    <img src={img} alt="product" />
                  </div>
                  <div className="description">
                    <h3>made by: {company}</h3>
                    <h3>price: ${price}</h3>
                    <p>{info}</p>
                  </div>
                </div>
                <div className="buttons">
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
              </DetailsWrapper>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

const DetailsWrapper = styled.div`
  padding: 20px;
  h2 {
    text-align: center;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    .img {
      flex: 1;
      img {
        max-width: 100%;
        min-width: 280px;
      }
    }
    .description {
      flex: 2;
    }
  }

  .buttons {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    grid-gap: 30px;
  }
`;
