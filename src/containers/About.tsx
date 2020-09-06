import React from "react";
import styled from "styled-components";
import { colors } from "styles/colors";
import packageJson from "../../package.json";

export default () => {
  return (
    <StyledAbout>
      <p>
        React.js learning project created by{" "}
        <a
          href={packageJson.author.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {packageJson.author.name}
        </a>
        .
      </p>
      <p>
        See the{" "}
        <a
          href={packageJson.repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>{" "}
        for more info about the project's learnings and goals.
      </p>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  text-align: center;
  margin: 40px 0;

  p:not(:last-child) {
    margin-bottom: 10px;
  }
  a {
    transition: all 0.3s;
    color: ${colors.blue.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: ${colors.blue.base};
    }
  }
`;
