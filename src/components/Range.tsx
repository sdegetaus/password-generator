import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { colors } from "assets";

export default React.memo(
  (props: RangeProps) => {
    // File members
    const [mValue, mSetValue] = useState(props.value || 0);

    const handleChange = React.useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        if (props.onChange != null) {
          props.onChange(name, Number(value));
        }
        mSetValue(Number(value));
      },
      [props]
    );

    return (
      <StyledRange className={`range form-item`}>
        {props.label && <label>{props.label}</label>}
        <input
          type="range"
          id={props.name}
          name={props.name}
          min={props.min}
          max={props.max}
          value={mValue}
          onChange={handleChange}
        />
      </StyledRange>
    );
  },
  (prev, curr) => {
    return prev.value === curr.value;
  }
);

const StyledRange = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  label {
    font-weight: 400;
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
    color: black;
  }

  input {
    transition: background-color 0.3s;
    appearance: none;
    position: relative;
    margin: 0;
    padding: 0;
    outline: none;
    height: 3px;
    width: 100%;
    cursor: pointer;
    border-radius: 2px;
    background-color: ${colors.bg.light};
    border-top: 1px solid ${colors.bg.light_hover};

    &:hover {
      background-color: ${colors.bg.light_hover};
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${colors.blue.base};
    }
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
