import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ID } from "../consts";

export default (props: RangeProps) => {
  const [mValue, mSetValue] = useState(props.value || 0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (props.onChange != null) {
      props.onChange(name, Number(value));
    }
    mSetValue(Number(value));
  };

  return (
    <>
      {props.label && <label>{props.label}</label>}
      <StyledInput
        id={props.name}
        name={props.name}
        type={ID.range}
        min={props.min}
        max={props.max}
        value={mValue}
        onChange={handleChange}
      />
    </>
  );
};

const StyledInput = styled.input`
  margin: 0;
  padding: 0;
  appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 20px;
  background: #eaeaea;
  outline: none;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    margin. 0 5px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;

type RangeProps = {
  name: string;
  min: number;
  max: number;
  value?: number;
  label?: JSX.Element | string;
  onChange?: (name: string, value: number) => void;
};
