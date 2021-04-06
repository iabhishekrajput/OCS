import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
import { Layout } from "../Layout";
import routes from "../Routes";

export const App = () => {
  return (
    <Layout>
      <React.Suspense
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
        </Switch>
      </React.Suspense>
    </Layout>
  );
};
