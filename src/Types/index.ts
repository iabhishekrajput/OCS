export type BreadcrumbType = {
  name: string;
  title: string;
  url: string;
};

export type BreadcrumbActionType = {
  type: string;
  payload: BreadcrumbType[];
};

export type StatusType = "success" | "error" | "warning";

export type ApplicationStatusType = {
  name: string;
  status: StatusType;
  message: string;
};

export type ApplicationsType = {
  id: number;
  name: string;
  title: string;
};
