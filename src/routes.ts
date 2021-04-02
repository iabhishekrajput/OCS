import * as React from "react";

const ApplicationPage = React.lazy(() => import("./dimat/ApplicationPage"));
const ComponentPage = React.lazy(() => import("./dimat/ComponentPage"));
const ServerPage = React.lazy(() => import("./dimat/ServerPage"));

const routes = [
  {
    id: "applications",
    path: "/applications",
    exact: true,
    name: "Applications",
    component: ApplicationPage,
  },
  {
    id: "components",
    path: "/components",
    exact: true,
    name: "Components",
    component: ComponentPage,
  },
  {
    id: "servers",
    path: "/servers",
    exact: true,
    name: "Servers",
    component: ServerPage,
  },
];
export default routes;
