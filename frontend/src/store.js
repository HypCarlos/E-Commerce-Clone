import { createStore } from 'redux';
import { products } from "./data";


//INITIAL STATE AND REDUCER
//RETURNS LIST OF PRODUCTS IN FRONTEND


const initialState = {};
const reducer = (state,action) => {
    return {productsx: products}
};

const store = createStore(reducer, initialState);

export default store;

