import {
  AdminLayout,
  AuthLayout,
  StudentLayout,
  TeacherLayout,
  WebLayout,
} from "@/Layout";
import { Home, Login } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

const LearnXRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <WebLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
        {
          path: "/admin",
          // element: <PrivateRoute role="admin" ><AdminLayout /></PrivateRoute>,
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: "/teacher",
          // element: <PrivateRoute role="admin" ><TeacherLayout /></PrivateRoute>,
          element: <TeacherLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: "/student",
          // element: <PrivateRoute role="admin" ><StudentLayout /></PrivateRoute>,
          element: <StudentLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default LearnXRoute;
