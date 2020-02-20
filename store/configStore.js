import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "./reducers";

export default function configureStore(onCompletion) {
  const store = createStore(reducer, applyMiddleware(thunk));
  persistStore(store, onCompletion);
  console.log('Store configured successfully...')
  return store;
}