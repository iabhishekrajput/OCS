import axios from "axios";
import { config } from "../config";
import {
  ApplicationStatusType,
  ApplicationType,
  ComponentStatusType,
  ComponentType,
  ServerType,
} from "../Types";

const cancelTokenSource = axios.CancelToken.source();

const axiosInterceptor = axios.create({
  baseURL: config.serverHostname,
  cancelToken: cancelTokenSource.token,
});

export const cancelRequest = () => {
  cancelTokenSource.cancel();
};

export const fetchApplications = async () => {
  const response = await axiosInterceptor.get<ApplicationType[]>(
    "/applications"
  );
  return response.data;
};

export const fetchApplicationStatus = async (applicationName: string) => {
  const response = await axiosInterceptor.get<ApplicationStatusType>(
    `/status/${applicationName}`
  );
  return response.data;
};

export const fetchComponents = async (applicationName: string) => {
  const response = await axiosInterceptor.get<ComponentType[]>(
    `/components?app=${applicationName}`
  );
  return response.data;
};

export const fetchComponentStatus = async (
  applicationName: string,
  componentName: string
) => {
  const response = await axiosInterceptor.get<ComponentStatusType>(
    `/status/${applicationName}/${componentName}`
  );
  return response.data;
};

export const fetchServers = async (
  applicationName: string,
  componentName: string
) => {
  const response = await axiosInterceptor.get<ServerType[]>("servers", {
    params: {
      app: applicationName,
      component: componentName,
    },
  });

  return response.data;
};
