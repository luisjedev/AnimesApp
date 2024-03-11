import { Home } from "./home.route";
import { Details } from "./details.route";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { Favorites } from "./favorites.route";

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
        path: "/details/:animeId",
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
