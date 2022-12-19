import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  deleteProductThunk,
  fetchProductsThunk,
} from "redux/slices/fetchSlice";

import { AppDispatch, RootState } from "redux/store";

export default function ProductTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const handleRemoveProduct = (_id: string) => {
    dispatch(deleteProductThunk(_id));
    refreshPage();
  };

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              product name
            </th>
            <th scope="col" className="py-3 px-6">
              category
            </th>
            <th scope="col" className="py-3 px-6">
              variant
            </th>

            <th scope="col" className="py-3 px-6">
              available sizes
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {products.allitems.map((product) => (
            <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="py-4 px-6">{product.category}</td>

                <td className="py-4 px-6">{product.variant}</td>
                <td className="py-4 px-6">{product.sizes.toString()}</td>
                <td className="py-4 px-6">
                  <button
                    type="button"
                    onClick={() => {
                      handleRemoveProduct(product._id);
                    }}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete Product
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
