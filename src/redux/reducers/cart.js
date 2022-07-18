import {TOGGLE_CART} from "../action-types";


const initialState = {
    cart: []
}


export default (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_CART: {
            const addedToCart = state.cart.filter(el => el.id !== action.payload.id);

            // if element still not in cart
            if(addedToCart.length === state.cart.length){
                addedToCart.push(action.payload)
            }
            return {
                ...state,
                cart: addedToCart
            }
        }
        default: {
            return state
        }
    }
}