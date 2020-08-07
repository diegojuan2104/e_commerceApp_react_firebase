import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // The middleware catch the actions, and execute 

// We need to pass the root reducer to create the store

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
