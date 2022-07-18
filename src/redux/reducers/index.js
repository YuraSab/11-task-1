import products from "./products";
import wishList from "./wishList";
import cart from "./cart";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    products: products,
    wishList: wishList,
    cart: cart
})




