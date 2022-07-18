import {useSelector} from "react-redux";
import "./header.css";

export const Header = (props) => {

    const {products, wishList, cart} = useSelector(({
                                                        products: {products},
                                                        wishList: {wishList},
                                                        cart: {cart}
                                                    }) => ({products, wishList, cart})
    );


    return(
        <div className={"mainDiv"}>
            <div>
                <h1>TEST-SHOP</h1>
            </div>
            <div>
                <div title={"Wish-list"}>Wish-list: {wishList.length}</div>
                <div title={"Cart-list"}>Cart-list: {cart.length}</div>
            </div>
        </div>
    )
}