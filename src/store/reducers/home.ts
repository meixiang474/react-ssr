import { AnyAction } from "redux";
import { News } from "@/typings";
import * as types from "../constants";

export interface HomeState {
  name: string;
  newsList: News[];
}

const defaultState: HomeState = {
  name: "dell lee",
  newsList: [],
};

const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case types.CHANGE_HOME_LIST:
      state.newsList = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
