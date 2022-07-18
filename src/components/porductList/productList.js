import {ProductItem} from "../productItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleCart, toggleWishList} from "../../redux/action-creators";
import wishList from "../../redux/reducers/wishList";

export const ProductList = (props) => {

    const {products} = props;

    const dispatch = useDispatch();

    const onAddToWishList = (product) => {
        dispatch(toggleWishList(product));
    }

    const onAddToCart = (product) => {
        dispatch(toggleCart(product));
    }

    const {wishList, cart} = useSelector(({wishList: {wishList}, cart: {cart}, }) => ({wishList, cart}));

    return(
        <div style={{paddingLeft: 34}}>
            {
                products.map(value => {
                    return(
                        <ProductItem
                            product = {value}
                            key = {value.id}
                            onAddToWishList = {onAddToWishList}
                            onAddToCart = {onAddToCart}
                            isAddedToCart = {cart.find(el => el.id === value.id)}
                            isAddedToWishList = {wishList.find(el => el.id === value.id)}

                        />
                    )
                })
            }
        </div>
    )
}