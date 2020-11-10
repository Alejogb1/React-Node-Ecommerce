import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { productListReducer, productDEtailsReducer } from "./reducers/productReducer";
import { userSigninReducer } from "./reducers/userReducer";

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDEtailsReducer,
    userSignin: userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)))
export default store