import {userService} from "../../services";
import {SET_PRODUCTS} from "../action-types";


export const setProducts = () => async (dispatch) => {
    const {productService} = userService();

    const response = await productService.getProducts();
    const json = await response.json();

    return dispatch({type: SET_PRODUCTS, payload: json});
}