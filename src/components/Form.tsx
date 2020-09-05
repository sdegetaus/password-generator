import React, { useState } from "react";
import { Checkbox } from ".";
import { ID } from "../consts";
import Range from "./Range";
import { randomString } from "../snippets/generator";

export default () => {
  // File members
  const [mValues, mSetValues] = useState({
    length: 16,
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
  });

  const [mError, mSetError] = useState({
    error: false,
    message: "",
  });

  const [mResult, mSetResult] = useState("");

  React.useEffect(() => {
    if (
      !mValues.symbols &&
      !mValues.numbers &&
      !mValues.lowercase &&
      !mValues.uppercase
    ) {
      mSetError({
        error: true,
        message: "Please select at least one character set!",
      });
      return;
    } else {
      mSetError({
        error: false,
        message: "",
      });
    }

    mSetResult(
      randomString(mValues.length, {
        ...mValues,
      })
    );
  }, [mValues]);

  const handleChange = (name: string, value: any) => {
    mSetValues({
      ...mValues,
      [name]: value,
    });
  };

  return (
    <>
      <form>
        <Range
          label={`Length (${mValues.length})`}
          name={ID.length}
          min={8}
          max={100}
          value={Number(mValues.length)}
          onChange={handleChange}
        />
        <fieldset className="checkbox-group">
          <Checkbox
            label={"Include Symbols"}
            name={ID.symbols}
            checked={Boolean(mValues.symbols)}
            onChange={handleChange}
          />
          <br />
          <Checkbox
            label={"Include Numbers"}
            name={ID.numbers}
            checked={Boolean(mValues.numbers)}
            onChange={handleChange}
          />
          <br />
          <Checkbox
            label={"Include Lowercase"}
            name={ID.lowercase}
            checked={Boolean(mValues.lowercase)}
            onChange={handleChange}
          />
          <br />
          <Checkbox
            label={"Include Uppercase"}
            name={ID.uppercase}
            checked={Boolean(mValues.uppercase)}
            onChange={handleChange}
          />
        </fieldset>
        <section className="result">
          {!mError.error ? mResult : mError.message}
        </section>
      </form>
    </>
  );
};
