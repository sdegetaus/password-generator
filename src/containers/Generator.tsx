import { Button, Checkbox, Range, Tooltip } from "components";
import { ID } from "consts";
import React, { useState } from "react";
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
  const [mHasCopied, mSetHasCopied] = useState(false);

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
    mSetHasCopied(false);
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
      mSetHasCopied(true);
    }
  };

  return (
    <StyledGenerator onSubmit={(e) => e.preventDefault()}>
      <Range
        label={`Character Length (${mValues.length})`}
        name={ID.length}
        min={8}
        max={512}
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
      <section className="actions">
        <h4>Actions</h4>
        <Button
          onClick={() => {
            mSetPassword(
              randomString(mValues.length, {
                ...mValues,
              })
            );
            mSetHasCopied(false);
          }}
        >
          Regenerate
        </Button>
      </section>
      <Tooltip
        label={`${!mHasCopied ? "Copy to Clipboard" : "Copied to Clipboard!"}`}
      >
        <section
          className={`result ${mError.error ? "error" : ""}`}
          onClick={() => copyToClipboard()}
        >
          {!mError.error ? mPassword : mError.message}
        </section>
      </Tooltip>
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

  .actions {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    font-weight: 300;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 5px 5px 8px -3px rgba(0, 0, 0, 0.1);
    padding: 25px;
    background-color: ${colors.bg.light};
    font-size: 20px;
    color: ${colors.text.base};
    text-align: center;
    line-height: 1.15em;
    &.error {
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
      color: white;
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
