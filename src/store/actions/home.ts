import { AxiosInstance } from "axios";
import { GetState, NewDispatch } from "@/store";
import * as Apis from "@/api";
import { GetHomeListAPI, News, TranslateAPI } from "@/typings";
import * as types from "../constants";

export const changeHomeList = (payload: News[]) => {
  return {
    type: types.CHANGE_HOME_LIST,
    payload,
  };
};

export const getHomeList = () => {
  return async (
    dispatch: NewDispatch,
    getState: GetState,
    request: AxiosInstance
  ) => {
    try {
      const { data } = await Apis.getHomeList<GetHomeListAPI>(request, {
        secret: Apis.SECRET,
      });
      dispatch(changeHomeList(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const translate = () => {
  return async (
    dispatch: NewDispatch,
    getState: GetState,
    request: AxiosInstance
  ) => {
    const {
      user: { login },
    } = getState();
    if (!login) {
      alert("请先登录");
      return;
    }
    try {
      const { data } = await Apis.translate<TranslateAPI>(request, {
        secret: Apis.SECRET,
      });
      dispatch(changeHomeList(data));
    } catch (e) {
      console.error(e);
    }
  };
};
