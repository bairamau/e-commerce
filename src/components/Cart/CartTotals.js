import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTotal, cartTax, clearCart } = value;
  return (
    <div>
      <Link to="/">
        <button onClick={clearCart}>Clear cart</button>
      </Link>
      <h3>Subtotal: ${cartSubtotal}</h3>
      <h3>Tax: ${cartTax}</h3>
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
}
