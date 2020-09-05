import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ID } from "../consts";

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
    <>
      {props.label && <label>{props.label}</label>}
      <StyledCheckbox
        id={props.name}
        name={props.name}
        type={ID.checkbox}
        value={props.name}
        checked={mChecked}
        onChange={handleChange}
      />
    </>
  );
};

const StyledCheckbox = styled.input``;

type RangeProps = {
  name: string;
  checked?: boolean;
  label?: JSX.Element | string;
  onChange?: (name: string, value: boolean) => void;
};
