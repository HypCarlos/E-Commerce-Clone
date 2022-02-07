// import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk  from 'redux-thunk';
import { cartReducer } from './components/reducers/cartReducers';
import { productDetailReducer, productListReducer } from './components/reducers/productReducers';
// import { cartReducer } from "./components/reducers/cartReducers";

//INITIAL STATE AND REDUCER
//RETURNS LIST OF PRODUCTS IN FRONTEND

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer

});

// const reducer = combineReducers({
//   cart: cartReducer
// });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
