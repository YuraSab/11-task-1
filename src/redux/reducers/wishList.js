import {TOGGLE_WISHLIST} from "../action-types";

const initialState = {
    wishList: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_WISHLIST: {
            const isAddedToWishList = state.wishList.filter(el => el.id !== action.payload.id);
            // if element still not in wish-list
            if(isAddedToWishList.length === state.wishList.length){
                isAddedToWishList.push(action.payload);
            }
            return{
                ...state,
                wishList: isAddedToWishList
            }
        }
        default: {
            return state
        }
    }
}