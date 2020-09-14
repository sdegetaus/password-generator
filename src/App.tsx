import { colors } from "assets";
import { AppLocales as LanguageData } from "assets/l10n";
import { About, ErrorHandler, Generator, LanguageMenu, Menu } from "containers";
import { useRenderCount } from "hooks";
import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import packageJson from "../package.json";

export default () => {
  useRenderCount("App");

  // File members
  const [mLanguage, mSetLanguage] = React.useState(LanguageData.en);

  // Functions
  const handleLanguageChange = (locale: string) => {
    if (mLanguage.locale === locale) {
      return;
    }
    // @ts-ignore
    mSetLanguage({ locale, messages: LanguageData[locale].messages });
  };

  return (
    <IntlProvider locale={mLanguage.locale} messages={mLanguage.messages}>
      <ErrorHandler>
        <Router>
          <StyledApp>
            <section className="title">
              <FormattedMessage tagName="h1" id="app.name" />
              <span>({packageJson.version})</span>
            </section>
            <section className="card">
              <Menu />
              <div className="content">
                <Switch>
                  <Route path="/" component={Generator} exact />
                  <Route path="/about" component={About} />
                </Switch>
              </div>
            </section>
            <LanguageMenu
              locale={mLanguage.locale}
              onChangeLanguage={handleLanguageChange}
            />
          </StyledApp>
        </Router>
      </ErrorHandler>
    </IntlProvider>
  );
};

const StyledApp = styled.div`
  background-color: ${colors.bg.dark};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  color: ${colors.text.base};
  .title {
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
  }
  .card {
    border: 1px solid white;
    box-shadow: 0 6px 12px -5px rgba(0, 0, 0, 0.25);
    background-color: ${colors.bg.lightest};
    width: 650px;
    border-radius: 1px;
    padding: 25px;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
  }
  .content {
    padding: 25px;
  }
`;
