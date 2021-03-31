import { AnyAction } from "redux";
import * as types from "../constants";

export interface UserState {
  login: boolean;
}

const defaultState: UserState = {
  login: false,
};

const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      state.login = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
