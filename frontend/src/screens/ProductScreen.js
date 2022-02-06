import React, { useEffect, useState} from "react";
import "../screens/ProductScreen.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../components/actions/productActions";

export default function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector( state => state.productDetails);
  const {product} = productDetails;
  const productId = props.match.params.id;
  // if (!product) {
  //   return <div>PRODUCT NOT FOUND</div>;
  // }



  useEffect(() => {
    dispatch(detailsProduct(productId));
    
  }, [dispatch, productId]);


  const addToCartHandler = () => {
    props.history.push(`/Cart/${productId}?qty=${qty}`);
  };

  return (

    
    <div className="product-screen">
      <div className="product-details">
        <div className="back-btn">
          <Link to="/">
            <i class="material-icons">arrow_back</i>
          </Link>
        </div>
        <div className="product-left">
          <div className="product-image">
            <img
              className="large"
              src={product.img}
              alt={product.id}
              height="430px"
            />
          </div>
        </div>
        <div className="product-right">
          <div className="product-desc">
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <br></br>
            <h3>{product.material}</h3>
            <br></br>
            <h3>{product.gender}</h3>
            <br></br>
            <h3>{product.shipTime}</h3>
            <br></br>
            <br />
            <div className="size-dd">
              <h3>SIZE</h3>
              <br></br>

              {product.inv > 0 ? (
                <span className="success">
                  <form>
                    <select name="variant">
                      <option value="SMALL">S</option>
                      <option value="MEDIUM">M</option>
                      <option value="LARGE">L</option>
                      <option value="X-LARGE">XL</option>
                      </select>
                      <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.inv).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>

                    <br></br>
                    <br />
                    <button onClick={addToCartHandler}>ADD TO CART</button>
                  </form>
                </span>
              ) : (
                <h3>
                  <span className="error">OUT OF STOCK</span>
                </h3>
              )}

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
