import * as React from "react";

const ApplicationPage = React.lazy(() => import("./dimat/ApplicationPage"));
const ComponentPage = React.lazy(() => import("./dimat/ComponentPage"));

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
];
export default routes;
