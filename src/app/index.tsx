import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Progress } from "@chakra-ui/react";

import { Layout } from "./layout";
import routes from "../routes";

export const App = () => {
  const initialState = [{ id: "home", url: "/", title: "Home" }];

  const [breadcrumbData, setBreadcrumbData] = React.useState<
    { id: string; url: string; title: string }[]
  >(initialState);

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
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component
                  breadcrumbData={breadcrumbData}
                  setBreadcrumbData={setBreadcrumbData}
                />
              </Route>
            ) : null;
          })}
          <Redirect exact from="/" to="/applications" />
        </Switch>
      </React.Suspense>
    </Layout>
  );
};
