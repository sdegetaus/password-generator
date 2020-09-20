import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { colors } from "assets";

export default () => {
  return (
    <StyledLoader>
      <FormattedMessage id="global.loading" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bg.dark};
  color: white;
  font-weight: 300;
  font-size: 35px;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
`;
