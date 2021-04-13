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

export type ApplicationType = {
  id: number;
  name: string;
  title: string;
};

export type ApplicationStatusType = {
  name: string;
  status: StatusType;
};

export type ComponentType = {
  id: number;
  name: string;
  title: string;
};

export type ComponentStatusType = {
  name: string;
  applicationName: string;
  status: StatusType;
};

export type ServerType = {
  id: number;
  name: string;
  title: string;
  os: string;
};
