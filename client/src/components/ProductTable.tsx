import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "redux/slices/fetchSlice";
import { AppDispatch, RootState } from "redux/store";
import DeleteProduct from "./DeleteProduct";

export default function ProductTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);

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
                  <DeleteProduct />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
