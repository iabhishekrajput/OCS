import { BreadcrumbType } from "../../Types";
import * as actionTypes from "./types";

export const setBreadcrumbToApplications = () => {
  return {
    type: actionTypes.HOME_BREADCRUMB,
    payload: [],
  };
};

export const setBreadcrumbToComponents = (
  applicationBreadcrumb: BreadcrumbType
) => {
  return {
    type: actionTypes.APPLICATION_BREADCRUMB,
    payload: [applicationBreadcrumb],
  };
};

export const setBreadcrumbToServers = (
  applicationBreadcrumb: BreadcrumbType,
  componentBreadcrumb: BreadcrumbType
) => {
  return {
    type: actionTypes.COMPONENT_BREADCRUMB,
    payload: [applicationBreadcrumb, componentBreadcrumb],
  };
};
