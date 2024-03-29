import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import {
  fetchProductByCategoryThunk,
  fetchProductsThunk,
} from "redux/slices/fetchSlice";
import React, { useEffect, useState } from "react";

export default function DropdownFilter() {
  const dispatch = useDispatch<AppDispatch>();

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (!category) {
      dispatch(fetchProductsThunk());
    } else {
      dispatch(fetchProductByCategoryThunk(category));
    }
  }, [dispatch, category]);

  return (
    <div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Select a category
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <button
              className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setCategory("")}
            >
              All
            </button>
          </li>
          <li></li>
          <li>
            <button
              className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setCategory("Custom")}
            >
              Custom
            </button>
          </li>
          <li>
            <button
              className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setCategory("Wireless")}
            >
              Wireless
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
