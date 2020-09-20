import { L10NProvider } from "assets";
import GlobalStyles from "assets/styles/global";
import React from "react";
import AppRouter from "./AppRouter";

export default () => {
  return (
    <L10NProvider>
      <GlobalStyles />
      <AppRouter />
    </L10NProvider>
  );
};
