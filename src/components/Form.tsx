import React, { useState } from "react";
import { Checkbox } from ".";
import { ID } from "../consts";
import Range from "./Range";

export default (props: FormProps) => {
  const [mValues, mSetValues] = useState({
    [ID.length]: 16,
    [ID.symbols]: true,
    [ID.numbers]: true,
    [ID.lowercase]: true,
    [ID.uppercase]: true,
  });

  const handleChange = (name: string, value: any) => {
    mSetValues({
      ...mValues,
      [name]: value,
    });

    if (props.onChange != null) {
      props.onChange(mValues);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.onSubmit != null) {
      props.onSubmit(mValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Range
        label={`Length (${mValues.length})`}
        name={ID.length}
        min={8}
        max={100}
        value={Number(mValues.length)}
        onChange={handleChange}
      />
      <fieldset>
        <Checkbox
          label={"Include Symbols"}
          name={ID.symbols}
          checked={Boolean(mValues[ID.symbols])}
          onChange={handleChange}
        />
        <br />
        <Checkbox
          label={"Include Numbers"}
          name={ID.numbers}
          checked={Boolean(mValues[ID.numbers])}
          onChange={handleChange}
        />
        <br />
        <Checkbox
          label={"Include Lowercase"}
          name={ID.lowercase}
          checked={Boolean(mValues[ID.lowercase])}
          onChange={handleChange}
        />
        <br />
        <Checkbox
          label={"Include Uppercase"}
          name={ID.uppercase}
          checked={Boolean(mValues[ID.uppercase])}
          onChange={handleChange}
        />
      </fieldset>
      <input name={ID.submit} type={ID.submit} value={"Submit"} />
    </form>
  );
};

type FormProps = {
  onChange?: (values: {}) => void;
  onSubmit?: (values: {}) => void;
};
