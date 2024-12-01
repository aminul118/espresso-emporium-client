import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import ViewDetails from "../components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://espresso-emporium-server-khaki.vercel.app/coffees"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-khaki.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
