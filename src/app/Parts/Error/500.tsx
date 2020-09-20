import { colors } from "assets";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledError } from "./StyledError";

export default () => {
  return (
    <Styled500Page>
      <div className="container">
        <h1 className="title">
          <FormattedMessage id="error.500" />
        </h1>
        <div className="actions">
          <Link to={"/"}>Back Home</Link>
        </div>
      </div>
    </Styled500Page>
  );
};

const Styled500Page = styled(StyledError)`
  background-color: ${colors.red.base};
`;
