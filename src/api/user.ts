import { AxiosInstance } from "axios";

export const login = <T>(
  request: AxiosInstance,
  params: Record<string, string>
) => {
  return request.get<T, T>("/ssr/api/login.json", { params });
};

export const logout = <T>(
  request: AxiosInstance,
  params: Record<string, string>
) => {
  return request.get<T, T>("/ssr/api/logout.json", { params });
};

export const validate = <T>(
  request: AxiosInstance,
  params: Record<string, string>
) => {
  return request.get<T, T>("/ssr/api/isLogin.json", { params });
};
