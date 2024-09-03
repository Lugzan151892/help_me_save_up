
import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/test",
    element: <div>Test</div>
  },
  {
    path: "login",
    element: <Login />
  }
]);

export default router;