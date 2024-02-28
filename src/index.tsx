import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Signup from "./pages/Signup/Signup";
import AdminRegister from "./components/AdminComponent/AdminRegister";
import AdminEdit from "./components/AdminComponent/AdminEdit";
import ProductDetail from "./components/ProductDetailComponent/ProductDetailComponent";
import Main from "./pages/Main/Main";
import CotegoryList from "./pages/CategoryList/CategoryList";
import GlobalStyles from "./styles/GlobalStyles";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./components/CheckoutComponent/PaymentComponent";

// import app from "./firebase/firebase";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <Admin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/admin/register", element: <AdminRegister /> },
  { path: "/admin/edit/:id", element: <AdminEdit /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/CotegoryList", element: <CotegoryList /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/checkout/payment", element: <Payment /> },
  { path: "/", element: <Main /> },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
