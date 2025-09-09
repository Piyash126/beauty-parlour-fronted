import { createBrowserRouter } from "react-router-dom";
import Login from "../authentication/login/Login";
import SignUp from "../authentication/signup/SignUp";
import AddServices from "../dashboard/admin/addServices/AddServices";
import AdminHome from "../dashboard/admin/adminHome/AdminHome";
import ManageServices from "../dashboard/admin/manageServices/ManageServices";
import UpdateService from "../dashboard/admin/updateService/UpdateService";
import Cart from "../dashboard/cart/Cart";
import Payment from "../dashboard/payment/payment/Payment";
import PaymentHistory from "../dashboard/paymentHistory/PaymentHistory";
import AllUsers from "../dashboard/user/allUsers/AllUsers";
import MessageOption from "../dashboard/user/review/MessageOption";
import UserHome from "../dashboard/user/userHome/UserHome";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import AllServices from "../pages/services/allServices/AllServices";
import AdminRoute from "./adminRoute/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allServices/:category",
        element: <AllServices></AllServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "review",
        element: <MessageOption></MessageOption>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //admin routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addServices",
        element: (
          <AdminRoute>
            <AddServices></AddServices>
          </AdminRoute>
        ),
      },
      {
        path: "manageServices",
        element: (
          <AdminRoute>
            <ManageServices></ManageServices>
          </AdminRoute>
        ),
      },
      {
        path: "updateService/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_baseURL}/services/${params.id}`),
      },
    ],
  },
]);
