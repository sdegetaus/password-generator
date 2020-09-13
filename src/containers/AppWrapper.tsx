import { AppLanguage } from "assets/l10n";
import React from "react";
import { IntlProvider } from "react-intl";

export default (props: AppWrapperProps) => {
  //   const [mLocale, mSetLocale] = React.useState();
  //   const [mMessages, mSetMessages] = React.useState();
  return (
    <IntlProvider locale={AppLanguage.locale} messages={AppLanguage.messages}>
      {props.children}
    </IntlProvider>
  );
};

type AppWrapperProps = {
  children: JSX.Element;
};
