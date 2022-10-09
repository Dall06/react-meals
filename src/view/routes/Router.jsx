import Root from "../pages/Root/Root";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from "../pages/HomePage/HomePage";
import MealsPage from "../pages/MealsPage/MealsPage";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import MealDetailPage from "../pages/MealDetailPage/MealDetailPage";

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
            path: "/meals",
            element: <MealsPage />
          },
          {
            path: "/meals/:id",
            element: <MealDetailPage />
          },
          {
            path: "/check-out",
            element: <CheckOutPage />
          }
        ]
      }
    ]
  },
]);

export default Router;