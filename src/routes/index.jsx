import {
  AdminAsideMenu,
  TeacherAsideMenu,
  StudentAsideMenu,
} from "@/constants";
import { AuthLayout, DashboardLayout, WebLayout } from "@/Layout";
import { Admin, Home, Login, ManageUsers, Student, Teacher } from "@/pages";
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
          element: <DashboardLayout items={AdminAsideMenu} />,
          children: [
            {
              index: true,
              element: <Admin />,
            },
            {
              path: "manage-users",
              element: <ManageUsers />,
            },
          ],
        },
        {
          path: "/teacher",
          // element: <PrivateRoute role="admin" ><TeacherLayout /></PrivateRoute>,
          element: <DashboardLayout items={TeacherAsideMenu} />,
          children: [
            {
              index: true,
              element: <Teacher />,
            },
          ],
        },
        {
          path: "/student",
          // element: <PrivateRoute role="admin" ><StudentLayout /></PrivateRoute>,
          element: <DashboardLayout items={StudentAsideMenu} />,
          children: [
            {
              index: true,
              element: <Student />,
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
