import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";

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
    ],
  },
]);

export default router;
