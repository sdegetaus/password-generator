import React from "react";
import styled from "styled-components";
import { colors } from "assets";
import packageJson from "../../package.json";
import { FormattedMessage, useIntl } from "react-intl";

export default () => {
  const intl = useIntl();
  return (
    <StyledAbout>
      <FormattedMessage tagName="p" id="about.content.0" />
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage(
            { id: "about.content.1" },
            {
              link: `<a href="${packageJson.author.url}" title="${packageJson.author.name}" target="_blank" rel="noopener noreferrer">${packageJson.author.name}</a>`,
            }
          ),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage(
            { id: "about.content.2" },
            {
              link: `<a href="${packageJson.repository.url}" title="${packageJson.name}" target="_blank" rel="noopener noreferrer">GitHub</a>`,
            }
          ),
        }}
      />
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  text-align: center;
  margin: 40px 60px;

  p {
    line-height: 1.5em;
    text-shadow: 0 1px 0 white;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
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
