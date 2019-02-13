import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
    }).isRequired
  };

  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper>
        <ProductConsumer>
          {value => (
            <React.Fragment>
              <div
                className="image-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img className="image" src={img} alt={title} />
                </Link>
              </div>
              <button
                className="add-btn"
                disabled={inCart}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart === true ? (
                  "In Cart"
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </React.Fragment>
          )}
        </ProductConsumer>
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

  .image {
    max-width: 100%;
  }

  .image-container {
    overflow: hidden;
  }

  .add-btn {
    padding: 10px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transform: scale(0);
  }

  .product-footer {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 18px;
  }

  &:hover {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
    transition: 0.4s;

    .image {
      transform: scale(1.2);
      transition: 1s;
    }

    .add-btn {
      transition: 0.4s;
      transform: scale(1);
      background: var(--lightBlue);
    }
  }
`;
