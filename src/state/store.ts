import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import { enableBatching } from "redux-batched-actions";
import createSagaMiddleware from "redux-saga";

import type { IApplicationState } from "./interfaces";
import { reducers } from "./reducers";
import sagas from "./sagas";
import type { Store } from "redux";


interface ReduxDevToolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

const composeEnhancers =
  typeof window === "object" &&
  (window as ReduxDevToolsWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as ReduxDevToolsWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__!({
        trace: true,
      })
    : compose;

export const prepareStore = (): Store<IApplicationState> => {
  const allReducers = enableBatching(
    combineReducers({
      ...reducers,
    })
  );

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store: Store<IApplicationState> = createStore(
    allReducers,
    undefined,
    enhancer
  );

  sagaMiddleware.run(sagas);

  return store;
};

export const store: Store<IApplicationState> = prepareStore();

export const dispatch = store.dispatch;
