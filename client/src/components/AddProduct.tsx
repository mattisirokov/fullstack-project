import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductThunk } from "redux/slices/fetchSlice";
import { AppDispatch } from "redux/store";
import { useNavigate } from "react-router-dom";
import { ProductData } from "types";

export default function AddProductForm() {
  const [productInfo, setProductInfo] = useState<ProductData>({
    _id: "",
    name: "",
    image: "",
    description: "",
    category: "",
    variant: "",
    sizes: [],
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleSetId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, _id: e.target.value });
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, name: e.target.value });
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, image: e.target.value });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, description: e.target.value });
  };

  const handleSetSizes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({
      ...productInfo,
      sizes: e.target.value.split(",").map(Number),
    });
  };

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductInfo({ ...productInfo, category: e.target.value });
  };

  const handleSetVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductInfo({ ...productInfo, variant: e.target.value });
  };

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      _id: productInfo._id,
      name: productInfo.name,
      image: productInfo.image,
      description: productInfo.description,
      category: productInfo.category,
      variant: productInfo.variant,
      sizes: productInfo.sizes,
    };
    dispatch(addProductThunk(newProduct));
    refreshPage();
  };

  return (
    <div className="mb-3">
      <button
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Add product
      </button>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add a product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    onChange={handleSetName}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product name
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_id"
                    onChange={handleSetId}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_id"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product id
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <select
                    id="cartegories"
                    name="cartegories"
                    onChange={handleSetCategory}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a category</option>
                    <option value="Wireless">Wireless</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <select
                    id="variants"
                    name="variants"
                    onChange={handleSetVariant}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a variant</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="image_url"
                      id="image_url"
                      onChange={handleSetImage}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Image URL
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="available_sizes"
                      id="available_sizes"
                      onChange={handleSetSizes}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Available sizes
                    </label>
                  </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    id="Product description"
                    name="Product description"
                    onChange={handleSetDescription}
                    //rows={7}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product description"
                  ></input>
                </div>

                <button
                  type="submit"
                  data-modal-toggle="defaultModal"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
