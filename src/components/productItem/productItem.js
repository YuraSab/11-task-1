export const ProductItem = ({
                                product,
                                product: {id, title, price, category, description, image},
                                onAddToWishList,
                                onAddToCart,
                                isAddedToCart,
                                isAddedToWishList,


}) => {


    return (
        <div>
            <div><h3>{title}</h3></div>
            <div><img style={{maxHeight: 200}} src={image} alt={title}/></div>
            <div><h5>Description:</h5></div>
            <div><h5>{description}</h5></div>
            <div>
                <button
                    onClick={() => onAddToWishList(product)}
                    style={{margin: 20, background: isAddedToWishList ? "red" : "green"}}
                >
                    {isAddedToWishList ? "Remove from wish-list" : "Add to wish-list"}
                </button>
                <button
                    onClick={() => onAddToCart(product)}
                    style={{margin: 20, background: isAddedToCart ? "red" : "green"}}
                >
                     {isAddedToCart ? "Remove from cart" : "Add to cart"}
                </button>
            </div>

            <hr/>

        </div>
    )
}