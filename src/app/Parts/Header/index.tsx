import { colors } from "assets";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import packageJson from "../../../../package.json";

export default () => {
  return (
    <StyledHeader>
      <FormattedMessage tagName="h1" id="app.name" />
      <span>({packageJson.version})</span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 40px 0;
  text-align: center;
  h1 {
    color: white;
    font-weight: 500;
    font-size: 50px;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  }
  span {
    color: ${colors.bg.lightest};
    font-weight: 300;
    font-size: 12px;
  }
`;
