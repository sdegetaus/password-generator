import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "assets";

export default (props: CheckboxProps) => {
  const [mChecked, mSetChecked] = useState<boolean>();
  const [mDisabled, mSetDisabled] = useState<boolean>();

  React.useEffect(() => {
    mSetChecked(props.checked ?? false);
    mSetDisabled(props.disabled ?? false);
  }, [props.checked, props.disabled]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (mDisabled) {
      return;
    }
    const checked = !mChecked;
    if (props.onChange != null) {
      props.onChange(props.name, checked);
    }
    mSetChecked(checked);
  };

  return (
    <StyledCheckbox
      className={`checkbox form-item ${mChecked ? "checked" : ""} ${
        mDisabled ? "disabled" : ""
      }`}
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
  cursor: pointer;

  &.disabled {
    opacity: 0.6;
  }

  .checkmark {
    transition: all 0.3s;
    margin-right: 10px;
    height: 20px;
    width: 20px;
    background-color: ${colors.bg.light};
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.8);

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
  }

  &.checked:not(.disabled):hover {
    .checkmark {
      background-color: ${colors.blue.dark};
    }
  }

  &:not(.disabled):hover {
    .checkmark {
      background-color: ${colors.bg.light_hover};
    }
  }

  &.disabled {
    &,
    label {
      cursor: not-allowed;
    }
  }
`;

type CheckboxProps = {
  name: string;
  checked?: boolean;
  label?: JSX.Element | string;
  disabled?: boolean;
  onChange?: (name: string, value: boolean) => void;
};
