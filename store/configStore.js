import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "./reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** 
 * Find the setupDevtools.js file at node_modules/react-native/Libraries/Core/Devtools/setupDevtools.js.
 * Then where there is host, add the following:
 * host: x.y.z.a - this is your LOCAL IP, not public IP
 * 
 * Check below link for more clarity
 * https://medium.com/@tetsuyahasegawa/how-to-integrate-react-native-debugger-to-your-expo-react-native-project-db1d631fad02
 */
export default function configureStore(onCompletion) {

  const store = createStore(reducer, applyMiddleware(thunk));
  persistStore(store, onCompletion);
  console.log('Store configured successfully...')
  return store;
}