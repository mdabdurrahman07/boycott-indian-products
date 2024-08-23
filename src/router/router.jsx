import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

export default router;
