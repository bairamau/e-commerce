import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 18px;
  background: transparent;
  border: 2px solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
