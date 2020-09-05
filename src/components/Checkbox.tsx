import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

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
    <div className={`checkbox form-item ${mChecked && "checked"}`}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <StyledCheckbox
        type="checkbox"
        id={props.name}
        name={props.name}
        value={props.name}
        checked={mChecked}
        onChange={handleChange}
      />
    </div>
  );
};

const StyledCheckbox = styled.input``;

type RangeProps = {
  name: string;
  checked?: boolean;
  label?: JSX.Element | string;
  onChange?: (name: string, value: boolean) => void;
};
