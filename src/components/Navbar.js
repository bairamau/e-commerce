import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-link">
            Products
          </Link>
        </div>
        <Link to="/cart">
          <ButtonContainer>
            <i className="fas fa-cart-plus" style={{ paddingRight: "5px" }} />
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  padding: 10px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  background: var(--mainBlue);
  .nav-link {
    padding: 0 30px;
    color: var(--mainWhite);
    text-decoration: none;
    font-size: 24px;
  }
  .nav-left {
    display: flex;
    align-items: center;
    img {
      max-width: 50px;
      border-radius: 50%;
    }
  }
`;
