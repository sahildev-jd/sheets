import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import reducer from "./rootReducer";

export let store = null;
const storeFactory = {
  addMiddleware: (middleware) => applyMiddleware(...middleware),
  initialize: () =>
    createStore(reducer, storeFactory.addMiddleware([thunkMiddleware])),
};

export const wrapper = createWrapper(storeFactory.initialize);
