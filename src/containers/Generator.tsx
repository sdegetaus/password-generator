import { colors } from "assets";
import { Button, Checkbox, Range, Tooltip } from "components";
import { ID } from "consts";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { randomPassword } from "snippets/generator";
import { generatorPrefs } from "snippets/storage";
import styled from "styled-components";

export default () => {
  // File members
  const intl = useIntl();
  const [mValues, mSetValues] = React.useState(() => {
    const prefs = generatorPrefs.get();
    return prefs === null
      ? {
          length: 32,
          symbols: true,
          numbers: true,
          lowercase: true,
          uppercase: true,
        }
      : prefs;
  });

  const [mError, mSetError] = React.useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });
  const [mPassword, mSetPassword] = React.useState("");
  const [mHasCopied, mSetHasCopied] = React.useState(false);

  React.useEffect(() => {
    // if all char sets are set to false: set error
    if (
      !mValues.symbols &&
      !mValues.numbers &&
      !mValues.lowercase &&
      !mValues.uppercase
    ) {
      mSetError({
        error: true,
        message: intl.formatMessage({ id: "error.noSettingsSelected" }),
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
      randomPassword(mValues.length, {
        ...mValues,
      })
    );
    mSetHasCopied(false);

    // save
    generatorPrefs.save({
      ...mValues,
    });
  }, [mValues, intl]);

  // Functions
  const handleChange = React.useCallback(
    (name: string, value: unknown) => {
      mSetValues({
        ...mValues,
        [name]: value,
      });
    },
    [mValues]
  );

  const copyToClipboard = React.useCallback(() => {
    if (!mError.error) {
      document.execCommand("copy");
      mSetHasCopied(true);
    }
  }, [mError]);

  return (
    <StyledGenerator onSubmit={(e) => e.preventDefault()}>
      <Range
        label={`${intl.formatMessage({ id: "global.charLength" })} (${
          mValues.length
        })`}
        name={ID.length}
        min={8}
        max={512}
        value={Number(mValues.length)}
        onChange={handleChange}
      />
      <h4>
        <FormattedMessage id="global.include" />
      </h4>
      <fieldset className="checkbox-group">
        {checkboxes.map((o) => (
          <Checkbox
            key={o.name}
            label={o.label}
            name={o.name}
            checked={mValues[o.name]}
            onChange={handleChange}
          />
        ))}
      </fieldset>
      <section className="actions">
        <h4>
          <FormattedMessage id="global.actions" />
        </h4>
        <Button
          onClick={() => {
            mSetPassword(
              randomPassword(mValues.length, {
                ...mValues,
              })
            );
            mSetHasCopied(false);
          }}
        >
          <FormattedMessage id="global.regenerate" />
        </Button>
      </section>
      <Tooltip
        label={`${
          !mHasCopied
            ? intl.formatMessage({ id: "global.copyToClipboard" })
            : intl.formatMessage({ id: "global.copiedToClipboard" })
        }`}
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
    margin-bottom: 40px;
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

const checkboxes = [
  {
    label: (
      <>
        <FormattedMessage id="global.symbols" />{" "}
        <span>
          (<FormattedMessage id="global.eg" /> _-=?*!&amp;)
        </span>
      </>
    ),
    name: ID.symbols,
  },
  {
    label: (
      <>
        <FormattedMessage id="global.numbers" />{" "}
        <span>
          (<FormattedMessage id="global.eg" /> 0..9)
        </span>
      </>
    ),
    name: ID.numbers,
  },
  {
    label: (
      <>
        <FormattedMessage id="global.lowercase" />{" "}
        <span>
          (<FormattedMessage id="global.eg" /> abcd)
        </span>
      </>
    ),
    name: ID.lowercase,
  },
  {
    label: (
      <>
        <FormattedMessage id="global.uppercase" />{" "}
        <span>
          (<FormattedMessage id="global.eg" /> ABCD)
        </span>
      </>
    ),
    name: ID.uppercase,
  },
];
