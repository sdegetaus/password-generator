import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, Range } from "../components";
import { ID } from "../consts";
import { randomString } from "../snippets/generator";
import { colors } from "../styles/colors";

export default () => {
  // File members
  const [mValues, mSetValues] = useState({
    length: 16,
    symbols: false,
    numbers: true,
    lowercase: false,
    uppercase: true,
    accented: false,
  });

  const [mError, mSetError] = useState({
    error: false,
    message: "",
  });

  const [mPassword, mSetPassword] = useState("");

  React.useEffect(() => {
    // if all char sets are set to false: set error
    if (
      !mValues.symbols &&
      !mValues.numbers &&
      !mValues.lowercase &&
      !mValues.uppercase &&
      !mValues.accented
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

    // set random password
    mSetPassword(
      randomString(mValues.length, {
        ...mValues,
      })
    );
  }, [mValues]);

  // Functions
  const handleChange = (name: string, value: any) => {
    mSetValues({
      ...mValues,
      [name]: value,
    });
    console.log(
      mValues.symbols,
      mValues.numbers,
      mValues.lowercase,
      mValues.uppercase,
      mValues.accented
    );
  };

  const copyToClipboard = () => {};

  return (
    <StyledGenerator>
      <Range
        label={`Length (${mValues.length})`}
        name={ID.length}
        min={8}
        max={100}
        value={Number(mValues.length)}
        onChange={handleChange}
      />
      <h4>Include</h4>
      <fieldset className="checkbox-group">
        {checkboxData.map((o) => (
          <Checkbox
            key={o.name}
            label={o.label}
            name={o.name}
            // @ts-ignore
            checked={mValues[o.name]}
            onChange={handleChange}
          />
        ))}
      </fieldset>
      <section className={`result${mError.error ? " error" : ""}`}>
        <span className="content">
          {!mError.error ? mPassword : mError.message}
        </span>
      </section>
    </StyledGenerator>
  );
};

const checkboxData = [
  {
    label: (
      <>
        Symbols <span>(e.g. @#$%)</span>
      </>
    ),
    name: ID.symbols,
  },
  {
    label: (
      <>
        Numbers <span>(e.g. 0..9)</span>
      </>
    ),
    name: ID.numbers,
  },
  {
    label: (
      <>
        Lowercase <span>(e.g. abcd)</span>
      </>
    ),
    name: ID.lowercase,
  },
  {
    label: (
      <>
        Uppercase <span>(e.g. ABCD)</span>
      </>
    ),
    name: ID.uppercase,
  },
  {
    label: (
      <>
        Accents <span>(e.g. áñöû)</span>
      </>
    ),
    name: ID.accented,
  },
];

const StyledGenerator = styled.form`
  h4 {
    font-weight: 400;
    font-size: 18px;
    color: black;
  }
  .range {
    margin-bottom: 15px;
  }
  fieldset {
    margin: 15px 0 25px;
    appearance: none;
    padding: 0;
    border: none;
    flex-wrap: wrap;
    display: flex;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid ${colors.bg.light};
    .form-item {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      color: ${colors.text.disabled};
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.bg.light};
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
      &.checked {
        color: ${colors.text.base};
      }
      label {
        user-select: none;
        font-size: 15px;
        span {
          color: ${colors.text.disabled};
          font-weight: 200;
          font-size: 14px;
        }
      }
      label,
      input {
        cursor: pointer;
      }
    }
  }
  .result {
    transition: background-color 0.3s;
    color: white;
    padding: 25px;
    border-radius: 3px;
    font-weight: 200;
    text-align: center;
    border: 1px solid white;
    background-color: ${colors.blue.dark};
    &.error {
      background-color: ${colors.red.base};
    }
    .content {
      font-size: 20px;
      word-break: break-all;
    }
  }
`;
