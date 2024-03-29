import  Axios  from 'axios';
import { CART_ADD_ITEM } from "../../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch ({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            img: data.img,
            price: data.price,
            inv: data.inv,
            product: data.id,
            qty,
        }
    });

    // SAVES CARTITEMS WITH LOCAL STORAGE
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}