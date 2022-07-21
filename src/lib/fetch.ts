import axios from "axios";
import Logger, { LogType } from "./logger";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  transformResponse: [
    (res) => {
      return JSON.parse(res);
    },
  ],
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Logger.log(error, LogType.ERROR);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Logger.log(error, LogType.ERROR);
    return Promise.reject(error);
  }
);

export const getReq = async <T>(url: string, params?: unknown): Promise<T> => {
  return (await axiosInstance.get(url, { params })).data;
};

export const postReq = async <T>(
  url: string,
  data?: unknown,
  params?: unknown
): Promise<T> => {
  return (await axiosInstance.post(url, data, { params })).data;
};

export const putReq = async <T>(
  url: string,
  data?: unknown,
  params?: unknown
): Promise<T> => {
  return (await axiosInstance.put(url, data, { params })).data;
};

export const deleteReq = async (
  url: string,
  params?: unknown
): Promise<void> => {
  return (await axiosInstance.delete(url, { params })).data;
};
