import { Checkbox, Range } from "components";
import { ID } from "consts";
import React, { useRef, useState } from "react";
import { randomString } from "snippets/generator";
import styled from "styled-components";
import { colors } from "styles/colors";

export default () => {
  // File members
  const [mValues, mSetValues] = useState({
    length: 16,
    symbols: true,
    numbers: true,
    lowercase: true,
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
  const handleChange = (name: string, value: unknown) => {
    mSetValues({
      ...mValues,
      [name]: value,
    });
  };

  const copyToClipboard = () => {
    if (mError.error === false) {
      document.execCommand("copy");
    }
  };

  return (
    <StyledGenerator onSubmit={(e) => e.preventDefault()}>
      <Range
        label={`Length (${mValues.length})`}
        name={ID.length}
        min={8}
        max={1024}
        value={Number(mValues.length)}
        onChange={handleChange}
      />
      <h4>Include</h4>
      <fieldset className="checkbox-group">
        {includeData.map((o) => (
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
      <section
        className={`result ${mError.error ? "error" : ""}`}
        onClick={() => copyToClipboard()}
      >
        {!mError.error ? mPassword : mError.message}
      </section>
    </StyledGenerator>
  );
};

const StyledGenerator = styled.form`
  h4 {
    font-weight: 400;
    font-size: 18px;
    color: black;
  }
  .range {
    margin-bottom: 25px;
  }
  fieldset {
    margin: 10px 0 20px;
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
      justify-content: flex-start;
      color: ${colors.text.disabled};
      text-decoration: line-through;
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.bg.light};
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
      &.checked {
        color: ${colors.text.base};
        text-decoration: none;
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
    cursor: pointer;
    user-select: all;
    word-break: break-all;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    color: white;
    border-radius: 3px;
    font-weight: 200;
    text-align: center;
    border: 1px solid white;
    padding: 25px;
    background-color: ${colors.blue.dark};
    font-size: 20px;
    color: white;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    line-height: 1em;
    &.error {
      user-select: none;
      word-break: break-word;
      background-color: ${colors.red.base};
    }
  }
`;

const includeData = [
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
