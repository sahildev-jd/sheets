import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { tableReducer } from "../store/table/tableReducer";

const combinedReducer = combineReducers({ tableReducer });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;
