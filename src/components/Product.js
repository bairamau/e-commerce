import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper>
          <div className="image-container">
            <Link to="/details">
              <img className="image" src={img} alt={title} />
            </Link>
          </div>
          <button
              className="add-btn"
              disabled={inCart}
              onClick={() => console.log("added", title)}
            >
              {inCart === true ? "In Cart" : <i className="fas fa-cart-plus" />}
            </button>
          <div className="product-footer">
            <p>{title}</p>
            <p>${price}</p>
          </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  
  display: inline-grid;
  background: #ffffff;
  border: 2px solid transparent;
  
  .image {
    max-width: 100%;
  }

  .image-container {
    overflow: hidden;
  }
  
  .add-btn {
    padding: 10px;
  }

  .product-footer {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 18px;
  }

  &:hover {
    border-color:black;
    transition: 0.4s;

    .product-footer {
      background: #dddddd;
      transition: 0.4s;
    }

    .image {
      transform: scale(1.3);
      transition: 1s;
    }
  }
`;
