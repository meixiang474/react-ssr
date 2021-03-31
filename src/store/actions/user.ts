import { AxiosInstance } from "axios";
import { GetState, NewDispatch } from "..";
import * as Apis from "@/api";
import { LoginAPI, ValidateAPI } from "@/typings";
import * as types from "../constants";

export const changeLogin = (payload: boolean) => {
  return {
    type: types.CHANGE_LOGIN,
    payload,
  };
};

export const login = () => {
  return async (
    dispatch: NewDispatch,
    getState: GetState,
    request: AxiosInstance
  ) => {
    try {
      const {
        data: { login },
      } = await Apis.login<LoginAPI>(request, {
        secret: Apis.SECRET,
      });
      dispatch(changeLogin(login));
    } catch (e) {
      console.error(e);
    }
  };
};

export const logout = () => {
  return async (
    dispatch: NewDispatch,
    getState: GetState,
    request: AxiosInstance
  ) => {
    try {
      await Apis.logout(request, {
        secret: Apis.SECRET,
      });
      dispatch(changeLogin(false));
    } catch (e) {
      console.error(e);
    }
  };
};

export const validate = () => {
  return async (
    dispatch: NewDispatch,
    getState: GetState,
    request: AxiosInstance
  ) => {
    try {
      const {
        data: { login },
      } = await Apis.validate<ValidateAPI>(request, {
        secret: Apis.SECRET,
      });
      dispatch(changeLogin(login));
    } catch (e) {
      console.error(e);
    }
  };
};
