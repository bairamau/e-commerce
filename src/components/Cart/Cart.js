import React, { Component } from "react";
import Title from "../Title";
import CartEntries from "./CartEntries";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotals";
import styled from "styled-components";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            return cart.length ? (
              <React.Fragment>
                <Title title="Your cart" />
                <Grid>
                  <CartEntries />
                  <CartList value={value} />
                </Grid>
                <CartTotal value={value} history={this.props.history} />
              </React.Fragment>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
