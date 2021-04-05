import axios from "axios";
import { config } from "../config";
import { ApplicationStatusType, ApplicationsType } from "../Types";

const cancelTokenSource = axios.CancelToken.source();

const axiosInterceptor = axios.create({
  baseURL: config.serverHostname,
  cancelToken: cancelTokenSource.token,
});

export const fetchApplicationStatus = async (applicationName: string) => {
  const response = await axiosInterceptor.get<ApplicationStatusType>(
    `/status/application/${applicationName}`
  );
  return response.data;
};

export const fetchApplications = async () => {
  const response = await axiosInterceptor.get<ApplicationsType[]>(
    "/applications"
  );
  return response.data;
};

export const cancelRequest = () => {
  cancelTokenSource.cancel();
};
