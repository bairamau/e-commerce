import React from "react";
import styled from "styled-components";
export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <React.Fragment>
      <img src={img} style={{ width: "100%" }} alt="product" />
      <p>{title}</p>
      <p>${price}</p>
      <Controls>
        <button onClick={() => decrement(id)}>&lt;</button>
        <div>{count}</div>
        <button onClick={() => increment(id)}>&gt;</button>
      </Controls>
      <i
        onClick={() => removeItem(id)}
        style={{ cursor: "pointer", color: "var(--mainYellow)" }}
        className="fas fa-trash"
      />
      <p>{total}</p>
    </React.Fragment>
  );
}

const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;

  button {
    cursor: pointer;
    font-size: 18px;
    border: 1px solid black;
    background: transparent;
    width: 40px;
    height: 40px;
    padding: 0;

    &:active {
      color: var(--mainWhite);
      background: black;
    }
  }
`;
