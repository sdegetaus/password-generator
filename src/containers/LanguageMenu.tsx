import React from "react";
import styled from "styled-components";
import { colors } from "assets";

export default (props: LanguageMenuProps) => {
  return (
    <StyledLanguageMenu>
      {[
        {
          key: "en",
          displayName: "EN",
        },
        {
          key: "es",
          displayName: "ES",
        },
      ].map((o) => (
        <li key={o.key}>
          <button
            onClick={() => props.onChangeLanguage(o.key)}
            className={props.locale === o.key ? "active" : ""}
            disabled={props.locale === o.key}
          >
            {o.displayName}
          </button>
        </li>
      ))}
    </StyledLanguageMenu>
  );
};

const StyledLanguageMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 650px;

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
`;

type LanguageMenuProps = {
  locale: string;
  onChangeLanguage: (locale: string) => void;
};
