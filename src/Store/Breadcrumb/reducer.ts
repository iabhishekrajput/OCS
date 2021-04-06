import { BreadcrumbActionType, BreadcrumbType } from "../../Types";
import * as actionTypes from "./types";

const initialState: {
  breadcrumbs: BreadcrumbType[];
} = {
  breadcrumbs: [{ name: "home", url: "/", title: "Home" }],
};

export const breadcrumbReducer = (
  state = initialState,
  action: BreadcrumbActionType
): { breadcrumbs: BreadcrumbType[] } => {
  switch (action.type) {
    case actionTypes.HOME_BREADCRUMB:
      return {
        ...state,
        breadcrumbs: initialState.breadcrumbs,
      };

    case actionTypes.APPLICATION_BREADCRUMB:
      return {
        ...state,
        breadcrumbs: [
          ...initialState.breadcrumbs,
          {
            name: action.payload[0].name,
            title: action.payload[0].title,
            url: action.payload[0].url,
          },
        ],
      };

    case actionTypes.COMPONENT_BREADCRUMB:
      return {
        ...state,
        breadcrumbs: [
          ...initialState.breadcrumbs,
          {
            name: action.payload[0].name,
            title: action.payload[0].title,
            url: action.payload[0].url,
          },
          {
            name: action.payload[1].name,
            title: action.payload[1].title,
            url: action.payload[1].url,
          },
        ],
      };

    default:
      return state;
  }
};
