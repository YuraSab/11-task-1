import {TOGGLE_WISHLIST} from "../action-types";

export const toggleWishList = (product) => ({type: TOGGLE_WISHLIST, payload: product});