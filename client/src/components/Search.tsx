import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { debounce } from "lodash";
import {
  fetchProductSearch,
  fetchProductsThunk,
} from "redux/slices/fetchSlice";

export default function Search() {
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!query) {
      dispatch(fetchProductsThunk());
    } else {
      dispatch(fetchProductSearch(query));
    }
  }, [dispatch, query]);

  const debouncedEventHandler = useMemo(() => debounce(handleSearch, 200), []);

  return (
    <div className="py-2 px-4 mx-0 max-w-screen-xl sm:py-8 lg:px-1">
      <div className="max-w-screen-mx mb-8 lg:mb-16">
        <form className="flex items-center">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search products"
              required
              onChange={debouncedEventHandler}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
