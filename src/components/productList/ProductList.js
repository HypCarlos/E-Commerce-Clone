import React from "react";
import "../productList/productList.css";
import Product from "../product/Product";
import { products, Products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-list">
        {products.map((item) => (
            <a href={`/product/${item.id}`}>
          <Product key={item.id} img={item.img} Link={item.link} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
