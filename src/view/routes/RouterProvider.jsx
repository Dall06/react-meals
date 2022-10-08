import {
  RouterProvider,
} from "react-router-dom";
import Router from "./Router";

const MyRouterProvider = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default MyRouterProvider;