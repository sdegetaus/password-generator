import { colors } from "assets";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledError } from "./StyledError";

export default () => {
  return (
    <Styled404Page>
      <div className="container">
        <h1 className="title">
          <FormattedMessage id="error.404" />
        </h1>
        <div className="actions">
          <Link to={"/"}>Back Home</Link>
        </div>
      </div>
    </Styled404Page>
  );
};

const Styled404Page = styled(StyledError)`
  background-color: ${colors.bg.dark};
`;
