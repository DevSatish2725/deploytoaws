import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingFn, productsListFn } from "./redux/productsSlice";
import { productListThunk } from "./redux/productsThunk";

const Products = () => {
  const loading = useSelector(loadingFn);
  const productsList = useSelector(productsListFn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListThunk());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {productsList?.products.map((product) => (
        <h1 key={product.id}>
          {product.id} {product.title}
        </h1>
      ))}
    </div>
  );
};

export default Products;
