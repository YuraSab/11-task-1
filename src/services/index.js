import {httpClient} from "./httpClient";
import {ProductService} from "./productService";


export const services = {
    productService: new ProductService(httpClient)
}


export const userService = () => {
    return services
}