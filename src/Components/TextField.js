import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color};
  min-height: 35px;
  height: 35px;
  font-size: 17px;
  width: 100%;
  display: initial;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.color};
  width: auto;
  margin: 10px 0;
  display: inline-block;
`;

export const Select = styled.select`
  min-height: 35px;
  height: 35px;
  display: inline-block;
  width: 100%;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
`;
export const Option = styled.option`
  min-height: 35px;
  height: 35px;
  display: inline-block;
  width: 100%;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
`;
export const TextField = ({ label, textDanger, cssInput, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <br />

      <Input className="form-control" {...props} />
      <span className="text text-danger">{textDanger}</span>
    </span>
  );
};

