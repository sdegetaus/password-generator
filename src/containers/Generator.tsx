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

  const pwdInputRef = useRef<HTMLTextAreaElement>(null);

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
    resizeTextarea();
  }, [mValues]);

  React.useEffect(() => {
    resizeTextarea();
  }, []);

  // Functions
  const resizeTextarea = () => {
    if (pwdInputRef.current != null) {
      pwdInputRef.current.style.height = "auto";
      pwdInputRef.current.style.height =
        pwdInputRef.current.scrollHeight + "px";
    }
  };

  const handleChange = (name: string, value: unknown) => {
    mSetValues({
      ...mValues,
      [name]: value,
    });
    resizeTextarea();
  };

  const copyToClipboard = () => {
    console.log(pwdInputRef.current);
    pwdInputRef.current?.select();
    document.execCommand("copy");
  };

  return (
    <StyledGenerator onSubmit={(e) => e.preventDefault()}>
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
        <textarea
          rows={1}
          style={{ height: "1em" }}
          ref={pwdInputRef}
          value={!mError.error ? mPassword : mError.message}
          readOnly
        />
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
    &.error {
      background-color: ${colors.red.base};
    }

    textarea {
      background: transparent;
      appearance: none;
      cursor: pointer;
      font: inherit;
      border: 0 none white;
      overflow: hidden;
      width: 100%;
      outline: none;
      resize: none;
      padding: 0;
      margin: 0;
      word-break: break-all;
      font-size: 20px;
      color: white;
      text-align: center;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
      line-height: 1em;
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
