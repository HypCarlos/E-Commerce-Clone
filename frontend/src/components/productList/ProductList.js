import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../productList/productList.css";
import Product from "../product/Product";


function ProductList() {

  const [productsB, setProducts] = useState( [] );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="pl">
      <div className="pl-list">
        {productsB.map((item) => (
            <a href={`/product/${item.id}`}>
          <Product key={item.id} img={item.img} Link={item.link} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
