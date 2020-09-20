import React from "react";
import { IntlProvider } from "react-intl";
import { L10N, L10NContext } from "../index";

export default (props: L10NProviderProps) => {
  // File members
  const [mLocale, mSetLocale] = React.useState(L10N.en.locale);
  const memoValue = React.useMemo(() => ({ mLocale, mSetLocale }), [
    mLocale,
    mSetLocale,
  ]);
  return (
    <L10NContext.Provider value={memoValue}>
      {/* @ts-ignore */}
      <IntlProvider locale={mLocale} messages={L10N[mLocale].messages}>
        {props.children}
      </IntlProvider>
    </L10NContext.Provider>
  );
};

type L10NProviderProps = {
  children: JSX.Element | JSX.Element[];
};
