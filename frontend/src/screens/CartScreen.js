import React, { useEffect } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../components/actions/cartActions";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {};
  return (
    <div className="shopping-cart">
      <div className="top row">
        <div className="col 2">
          {/* <h1>Shopping Cart</h1> */}
          <div className="cart-header">
            <h4 id= "product-header">PRODUCT</h4>
            <h4 id= "price-header">PRICE</h4>
            <h4 id= "qty-header">QTY</h4>
            <h4 id= "total-header">TOTAL</h4>
            
            
          </div>
          <h4 id="product-header">LIMIT 10 ITEMS PER CUSTOMER</h4>
          {cartItems.length === 0 ? (
            <h2>
              CART IS EMPTY
              <br />
              <br /> <Link to="/">RETURN TO STORE</Link>
            </h2>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                  <div className="min-30">
                      <Link to={`/product/${item.product}`}>
                        <br/>
                        <h4>{item.name}</h4>
                      </Link>
                      
                    </div>
                    <div>
                      <img 
                        src={item.img}
                        alt={item.name}
                        className="cart-img"
                      ></img>
                    </div>
                   
                    <div className="change-qty">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product),
                            Number(e.target.value)
                          )
                        }
                      >
                        {[...Array(item.inv).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="item-price">
                      <h4>${item.price}</h4>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="total">
         {/* <h1>{{totalPrice += {item.price}}</h1>  */}
      </div>
    </div>
  );
}
