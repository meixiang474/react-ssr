import { combineReducers } from "redux-immer";
import produce from "immer";
import { Reducer, AnyAction } from "redux";
import homeReducer, { HomeState } from "./home";
import userReducer, { UserState } from "./user";

export interface RootState {
  home: HomeState;
  user: UserState;
}

const reducer: Reducer<RootState, AnyAction> = combineReducers(produce, {
  home: homeReducer,
  user: userReducer,
});

export default reducer;
