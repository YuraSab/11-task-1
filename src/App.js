import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/porductList";
import {useEffect} from "react";
import {setProducts} from "./redux/action-creators";

export function App() {
    const {products, wishList, cart} = useSelector(({
                                                        products: {products},
                                                        wishList: {wishList},
                                                        cart: {cart}
                                                    }) => ({products, wishList, cart})
    );

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(setProducts())
    }, [])


    return(
        <div>
            {/*{products.length}*/}
            <Header/>
            <ProductList products={products}/>
        </div>
    )
}