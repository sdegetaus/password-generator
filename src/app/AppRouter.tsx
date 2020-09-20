import { ROUTES } from "consts";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  Card,
  ErrorScreen,
  Footer,
  Header,
  Loader,
  StyledLayout,
} from "./Parts";

export default () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <ErrorScreen>
          <Switch>
            {/* PUBLIC ROUTES */}
            {routes.public.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={
                  <StyledLayout>
                    <Header />
                    <Card>
                      <route.render />
                    </Card>
                    <Footer />
                  </StyledLayout>
                }
              />
            ))}
            {/* ERROR ROUTES */}
            {routes.error.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={<route.render />}
              />
            ))}
            <Redirect
              to={{
                pathname: `/${ROUTES.ERROR.E404}`,
              }}
            />
          </Switch>
        </ErrorScreen>
      </BrowserRouter>
    </Suspense>
  );
};

const routes = {
  public: [
    {
      path: `/`,
      render: lazy(() => import("../containers/Generator")),
      exact: true,
    },
    {
      path: `/${ROUTES.PAGE.ABOUT}`,
      render: lazy(() => import("../containers/About")),
      exact: true,
    },
  ],
  error: [
    {
      path: `/${ROUTES.ERROR.E404}`,
      render: lazy(() => import("./Parts/Error/404")),
      exact: true,
    },
  ],
};
