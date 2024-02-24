import { RouteObject } from "react-router-dom";
import { Home } from "./home.route";
import { Details } from "./details.route";
import { Favorites } from "./fav.route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
