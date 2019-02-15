import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "grid",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <p style={{ fontSize: "36px" }}>
          {this.props.location.pathname} not found
        </p>
      </div>
    );
  }
}
