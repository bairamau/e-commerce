import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          return modalOpen ? (
            <ModalContainer onClick={closeModal}>
              <div className="modal">
                <p>Item added to the cart</p>
                <img src={img} alt="product" />
                <h3>{title}</h3>
                <h3>price: ${price}</h3>
                <Link to="/">
                  <ButtonContainer onClick={closeModal}>
                    continue shopping
                  </ButtonContainer>
                </Link>
                <Link to="/cart">
                  <ButtonContainer cart onClick={closeModal}>
                    go to cart
                  </ButtonContainer>
                </Link>
              </div>
            </ModalContainer>
          ) : null;
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  align-items: center;
  justify-items: center;
  .modal {
    background-color: var(--mainWhite);
    display: grid;
    grid-gap: 10px;
    justify-items: center;
    border-radius: 15px;
    padding: 15px;
    p,
    h3 {
      margin: 0;
    }
    img {
      height: 50vh;
    }
  }
`;
