import { AxiosInstance } from "axios";

export const getHomeList = <T>(
  request: AxiosInstance,
  params: Record<string, string>
) => {
  return request.get<T, T>("/ssr/api/news.json", { params });
};

export const translate = <T>(
  request: AxiosInstance,
  params: Record<string, string>
) => {
  return request.get<T, T>("/ssr/api/translations.json", { params });
};
