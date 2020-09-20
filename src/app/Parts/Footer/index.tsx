import { L10N, L10NContext } from "assets";
import React from "react";
import styled from "styled-components";

export default () => {
  const languages = Object.entries(L10N);
  const { mLocale, mSetLocale } = React.useContext(L10NContext);

  return (
    <StyledFooter>
      {languages.map(([key, values], i) => (
        <li key={key}>
          <button
            onClick={() => mSetLocale(key)}
            className={mLocale === key ? "active" : ""}
            disabled={mLocale === key}
            title={values.displayName}
          >
            {values.displayName}
          </button>
          {i !== languages.length - 1 && <span className="sep">&#8226;</span>}
        </li>
      ))}
    </StyledFooter>
  );
};

const StyledFooter = styled.ol`
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  margin: 40px 0;
  button {
    padding: 5px 10px;
    transition: all 0.3s;
    cursor: pointer;
    background: transparent;
    font: inherit;
    border: 0;
    outline: 0;
    opacity: 0.5;
    font-size: 14px;
    color: white;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
    &:hover {
      opacity: 0.75;
    }
    &.active {
      cursor: default;
      opacity: 0.9;
    }
  }
  .sep {
    color: white;
    opacity: 0.8;
  }
`;
