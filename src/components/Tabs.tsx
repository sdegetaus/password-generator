import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

export default () => {
  return (
    <StyledTabs className="tabs">
      <li className="active">Generator</li>
      <li>About</li>
    </StyledTabs>
  );
};

const StyledTabs = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  li {
    transition: color 0.3s;
    text-shadow: 0 1px white;
    font-size: 18px;
    display: inline-flex;
    border-bottom: 1px solid white;
    cursor: pointer;
    padding: 15px 0;
    width: 50%;
    justify-content: center;
    background-color: ${colors.bg.light};
    color: ${colors.text.disabled};
    font-weight: 400;
    &:hover:not(.active) {
      color: ${colors.text.base};
    }
  }
  .active {
    border-bottom-color: ${colors.bg.lightest};
    color: ${colors.red.base};
    background-color: ${colors.bg.lightest};
  }
`;
