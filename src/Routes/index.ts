import * as React from "react";

const ApplicationPage = React.lazy(() => import("../App/ApplicationPage"));
const ComponentPage = React.lazy(() => import("../App/ComponentPage"));
const ServerPage = React.lazy(() => import("../App/ServerPage"));

const routes = [
  {
    id: "applications",
    path: "/",
    exact: true,
    name: "Applications",
    component: ApplicationPage,
  },
  {
    id: "components",
    path: "/:application",
    exact: true,
    name: "Components",
    component: ComponentPage,
  },
  {
    id: "servers",
    path: "/:application/:component",
    exact: true,
    name: "Servers",
    component: ServerPage,
  },
];
export default routes;
