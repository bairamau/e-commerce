import React from "react";
import styled from "styled-components";

export default function Title({ title }) {
  return <TitleWrapper>{title}</TitleWrapper>;
}

const TitleWrapper = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 300;
`;
