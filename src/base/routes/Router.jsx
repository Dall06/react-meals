import Root from '../../view/pages/Root/Root';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../../view/pages/ErrorPage/ErrorPage';
import HomePage from '../../view/pages/HomePage/HomePage';
import MealsPage from '../../view/pages/MealsPage/MealsPage';
import MealDetailPage from '../../view/pages/MealDetailPage/MealDetailPage';
/*import CheckOutPage from "../../view/pages/CheckOutPage/CheckOutPage";*/

const Router = createBrowserRouter([
  {
    base: '/react-meals',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/react-meals',
            element: <HomePage />
          },
          {
            path: '/react-meals/meals',
            element: <MealsPage />
          },
          {
            path: '/react-meals/meals/:id',
            element: <MealDetailPage />
          }
          /*{
            path: "/react-meals/check-out",
            element: <CheckOutPage />
          }*/
        ]
      }
    ]
  }
]);

export default Router;
