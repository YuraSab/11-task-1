import {TOGGLE_CART} from "../action-types";

export const toggleCart = (product) => ({type: TOGGLE_CART, payload: product});