import styled from "styled-components";

//----------------button-------------------
export const Button = styled.button`
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0.25em 0.5em;
  font-size: 17px;
  font-weight: bold;
  margin-right: 5px;
  background-color: ${(props) =>
    props.Register
      ? "#28a745"
      : props.Update
      ? "#007bff"
      : props.Edit
      ? "#007bff"
      : "#dc3545"};
  transition: 0.5s all;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
  &:disabled {
    cursor: no-drop;
    opacity: 0.65;
    &:hover {
      background-color: ${(props) => (props.Register ? "#28a745" : "#007bff")};
      border: 1px solid ${(props) => (props.Register ? "#28a745" : "#007bff")};
      color: ${(props) => (props.Register = "#fff")};
    }
  }
`;
