import Root from "../pages/Root/Root";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from "../pages/HomePage/HomePage";
import MealsPage from "../pages/MealsPage/MealsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            indexindex: true,
            path: "/",
            element: <HomePage />
          },
          {
            indexindex: true,
            path: "/meals",
            element: <MealsPage />
          }
        ]
      }
    ]
  },
]);

export default Router;