import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../productList/productList.css";
import Product from "../product/Product";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "../actions/productActions";


function ProductList() {

  // const [productsB, setProducts] = useState( [] );
  const dispatch = useDispatch();
  const productList = useSelector( (state) => state.productList);
  const {error, products } = productList;
  useEffect(() => {

    dispatch(listProducts());
    // const fetchData = async () => {
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // };
    // fetchData();
  }, []);
  return (
    <div className="pl">
      <div className="pl-list">
        {products.map((item) => (
            <Link to={`/product/${item.id}`}>
          <Product key={item.id} img={item.img} Link={item.link} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
