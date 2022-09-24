import * as React from "react";
import { useEffect } from "react";
import { fetchProductsThunk } from "../redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Product } from "../redux/slices/productsSlice";
import { RootState } from "redux/store";

//making this aesthetically pleasing later on

const ProductGrid = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div>
      {products.map((product: Product) => (
        <div>
          <h3>{product.name}</h3>
          
          <p>{product.description}</p>

          <button>Read more</button>
          
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
