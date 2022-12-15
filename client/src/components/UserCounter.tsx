import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersThunk } from "redux/slices/usersSlice";
import { AppDispatch, RootState } from "redux/store";

export default function ProductCounter() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <div className="max-w-sm p-6 min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-5xl mb-4 font-semibold text-gray-700 dark:text-white">
          {users.allusers.length}
        </h1>
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Users currently registered on the website
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          We are constantly looking to bring on new users, and{" "}
          {users.allusers.length} users is certainly a good start.
        </p>
        <div className="inline-flex items-center text-blue-600 hover:underline">
          See all products on the product page
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
