import React from "react";
import "../product/product.css";

function Product(props) {
return (
    <div className="product">
        <div className="product-disp">

        </div>
        <img id= "home-pic" src= {props.img} alt="" className= "p-img"/>
    </div>
)
}

export default Product;