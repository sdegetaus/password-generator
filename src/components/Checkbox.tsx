import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

export default (props: RangeProps) => {
  const [mChecked, mSetChecked] = useState(props.checked || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    if (props.onChange != null) {
      props.onChange(name, checked);
    }
    mSetChecked(checked);
  };

  return (
    <StyledCheckbox className={`checkbox form-item ${mChecked && "checked"}`}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        value={props.name}
        checked={mChecked}
        onChange={handleChange}
      />
      <span className="checkmark"></span>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  position: relative;
  transition: all 0.3s;

  &:hover input ~ .checkmark {
    background-color: ${colors.bg.light_hover};
  }

  input {
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 100%;
    outline: none;
    appearance: none;
    margin: 0;
    padding: 0;

    &:checked ~ .checkmark {
      background-color: ${colors.blue.base};
      border-radius: 1px;
      box-shadow: none;
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    transition: all 0.3s;
    margin-right: 10px;
    height: 20px;
    width: 20px;
    background-color: ${colors.bg.light};

    &:after {
      pointer-events: none;
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
`;

type RangeProps = {
  name: string;
  checked?: boolean;
  label?: JSX.Element | string;
  onChange?: (name: string, value: boolean) => void;
};
