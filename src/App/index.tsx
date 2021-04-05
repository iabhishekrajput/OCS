import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Progress } from "@chakra-ui/react";
import { Layout } from "../Layout";
import ApplicationPage from "./Applications";

export const App = () => {
  return (
    <Layout>
      <ApplicationPage />
      {/* <React.Suspense
        fallback={
          <Progress
            size="xs"
            position="absolute"
            top={0}
            left={0}
            right={0}
            zIndex={3}
            p={-3}
            isIndeterminate
          />
        }
      >
        <Switch>
          {routes.map((route, index) => {
            return route.component ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ) : null;
          })} 
          <Redirect exact from="/" to="/" />
        </Switch>
      </React.Suspense> */}
    </Layout>
  );
};
