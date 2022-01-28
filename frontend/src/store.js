import { applyMiddleware, createStore, compose } from "redux";
import thunk  from "redux-thunk";
import { products } from "./data";

//INITIAL STATE AND REDUCER
//RETURNS LIST OF PRODUCTS IN FRONTEND

const initialState = {};
const reducer = (state, action) => {
  return { productsx: products };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
