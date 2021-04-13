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
    case actionTypes.SET_BREADBRUMB:
      return {
        ...state,
        breadcrumbs: [...initialState.breadcrumbs, ...action.payload],
      };

    default:
      return state;
  }
};
