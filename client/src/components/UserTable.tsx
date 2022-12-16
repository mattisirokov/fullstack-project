import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserThunk, fetchUsersThunk } from "redux/slices/usersSlice";
import { AppDispatch, RootState } from "redux/store";

export default function UserTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state);

  const handleDeleteUser = (Id: string) => {
    dispatch(deleteUserThunk(Id));
  };

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              name and surname
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>

            <th scope="col" className="py-3 px-6">
              Is banned?
            </th>
            <th scope="col" className="py-3 px-6">
              Is admin?
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {users.allusers.map((user) => (
            <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.firstname} {user.surname}
                </th>
                <td className="py-4 px-6">{user.email}</td>

                <td className="py-4 px-6">{user.isBanned.toString()}</td>
                <td className="py-4 px-6">{user.isAdmin.toString()}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete user
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
