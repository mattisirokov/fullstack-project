import Navbar from "components/Navbar";
import ProductCounter from "components/ProductCounter";
import UserCounter from "components/UserCounter";
import UserTable from "components/UserTable";
import ProductTable from "components/ProductTable";
import Footer from "components/Footer";
const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="text-4xl mb-4 font-extrabold dark:text-white">
              Welcome to the dashboard!
            </h2>

            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              This is where you can see the current status of the website. You
              can preform CRUD operations on the products and users. Feel free
              to have a look around, and if you have any questions, please
              contact me.
            </p>
            <div className="inline-flex mb-8 items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
              Read more about this project
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <ProductCounter />
              <UserCounter />
              <ProductCounter />
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="text-4xl mb-4 font-extrabold dark:text-white">
              Manage users
            </h2>
            <UserTable />
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="text-4xl mb-4 font-extrabold dark:text-white">
              Manage products
            </h2>
            <ProductTable />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
