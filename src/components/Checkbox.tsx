import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "assets";

export default (props: CheckboxProps) => {
  const [mChecked, mSetChecked] = useState(props.checked || false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const checked = !mChecked;
    if (props.onChange != null) {
      props.onChange(props.name, checked);
    }
    mSetChecked(checked);
  };

  return (
    <StyledCheckbox
      className={`checkbox form-item ${mChecked ? "checked" : ""}`}
      onClick={handleClick}
    >
      <span className="checkmark"></span>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  position: relative;
  transition: all 0.3s;

  .checkmark {
    transition: all 0.3s;
    margin-right: 10px;
    height: 20px;
    width: 20px;
    background-color: ${colors.bg.light};

    &:after {
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

  &.checked {
    .checkmark {
      background-color: ${colors.blue.base};
      border-radius: 1px;
      &:after {
        display: block;
      }
    }
    &:hover {
      .checkmark {
        background-color: ${colors.blue.dark};
      }
    }
  }

  &:hover {
    cursor: pointer;
    .checkmark {
      background-color: ${colors.bg.light_hover};
    }
  }
`;

type CheckboxProps = {
  name: string;
  checked?: boolean;
  label?: JSX.Element | string;
  onChange?: (name: string, value: boolean) => void;
};
