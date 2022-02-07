import React, { useEffect } from "react";
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


  const removeFromCartHandler = (id) => {

  };
  return (
    <div>
      <div className="top row">
        <div className="col 2">
          <h1>Shopping Cart</h1>
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
                    <div>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}> {item.name} </Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product),
                            Number(e.target.value)
                          )
                        }
                      >
                        {[...Array(item.inv).keys()].map( (x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                        ) )}
                      </select>
                    </div>
                    <div>
                      ${item.price}
                    </div>
                    <div>
                      <button type= "button" onClick={() => removeFromCartHandler(item.product)}>
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
    </div>
  );
}
