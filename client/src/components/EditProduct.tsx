import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProductThunk, fetchProductThunk } from "redux/slices/fetchSlice";
import { AppDispatch, RootState } from "redux/store";
import { ProductData } from "types";

export function EditProduct() {
  const [updatedInfo, setUpdatedInfo] = useState<ProductData>({
    name: "",
    image: "",
    description: "",
    category: "",
    variant: "",
    sizes: [],
  });

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({ ...updatedInfo, name: e.target.value });
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({ ...updatedInfo, image: e.target.value });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedInfo({ ...updatedInfo, description: e.target.value });
  };

  const handleSetSizes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({
      ...updatedInfo,
      sizes: e.target.value.split(",").map(Number),
    });
  };

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedInfo({ ...updatedInfo, category: e.target.value });
  };

  const handleSetVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedInfo({ ...updatedInfo, variant: e.target.value });
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProduct = {
      name: updatedInfo.name,
      image: updatedInfo.image,
      description: updatedInfo.description,
      category: updatedInfo.category,
      variant: updatedInfo.variant,
      sizes: updatedInfo.sizes,
    };
    dispatch(updateProductThunk(updatedProduct));
    refreshPage();
  };

  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);
  const { productId } = useParams<{ productId: string }>();
  const product = products.allitems.find(
    (product) => product._id === productId
  );

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductThunk(productId));
    }
  }, [dispatch, productId]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update {product?.name}
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                defaultValue={product?.name}
                onChange={handleSetName}
                placeholder="Type product name"
                required
              ></input>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Image URL"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image url"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                defaultValue={product?.image}
                onChange={handleSetImage}
                placeholder="type image url"
                required
              ></input>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Image URL"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Available Sizes
              </label>
              <input
                type="text"
                name="available sizes"
                id="available sizes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                defaultValue={product?.sizes.toString()}
                onChange={handleSetSizes}
                placeholder="Give available sizes"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                onChange={handleSetCategory}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>{product?.category}</option>
                <option value="Custom">Custom</option>
                <option value="Wireless">Wireless</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="variant"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Variant
              </label>
              <select
                id="variant"
                onChange={handleSetVariant}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>{product?.variant}</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleSetDescription}
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write a product description here..."
              >
                {product?.description}
              </textarea>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update product
            </button>
            <button
              type="button"
              className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <svg
                className="w-5 h-5 mr-1 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
