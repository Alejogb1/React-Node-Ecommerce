import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { productListReducer, productDEtailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers"

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDEtailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))
export default store