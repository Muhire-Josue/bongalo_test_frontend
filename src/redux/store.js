import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import initialState from "./initialState";
import rootReducers from "./reducers";

export default createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
