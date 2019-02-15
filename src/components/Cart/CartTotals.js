import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import styled from "styled-components";

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTotal, cartTax, clearCart } = value;
  return (
    <TotalsWrapper>
      <Link to="/">
        <button className="clear" onClick={clearCart}>
          Clear cart
        </button>
      </Link>
      <h3>
        <span>Subtotal: </span>${cartSubtotal}
      </h3>
      <h3>
        <span>Tax: </span>${cartTax}
      </h3>
      <h3>
        <span>Total:</span> ${cartTotal}
      </h3>
      <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
    </TotalsWrapper>
  );
}

const TotalsWrapper = styled.div`
  padding: 30px;
  display: grid;
  justify-content: end;

  .clear {
    background: transparent;
    color: red;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    border: 2px solid red;
    border-radius: 4px;
  }

  h3 {
    display: flex;
    justify-content: space-between;
  }

  PayPalButton {
    border-radius: 4px;
  }
`;
