import {
  ApplicationType,
  BreadcrumbActionType,
  ComponentType,
} from "../../Types";
import * as actionTypes from "./types";

export const setApplicationBreadcrumb = () => {
  return {
    type: actionTypes.SET_BREADBRUMB,
    payload: [],
  };
};

export const setComponentsBreadcrumb = (
  application: ApplicationType
): BreadcrumbActionType => {
  return {
    type: actionTypes.SET_BREADBRUMB,
    payload: [
      {
        name: application.name,
        title: application.title,
        url: `/${application.name}`,
      },
    ],
  };
};

export const setServersBreadcrumb = (
  application: ApplicationType,
  component: ComponentType
): BreadcrumbActionType => {
  return {
    type: actionTypes.SET_BREADBRUMB,
    payload: [
      {
        name: application.name,
        title: application.title,
        url: `/${application.name}`,
      },
      {
        name: component.name,
        title: component.title,
        url: `/${application.name}/${component.name}`,
      },
    ],
  };
};
