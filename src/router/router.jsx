import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import Products from "../Pages/Products/Products";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <Category />
      }
    ],
  },
]);

export default router;
