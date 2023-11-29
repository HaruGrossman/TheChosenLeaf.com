import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

// import AuthForm from "./features/auth/AuthForm";
import Navbar from "./layout/Navbar.jsx";
import Carousel from "./features/plants/Home.jsx"; //for home page
//import Footer from "./layout/Footer.jsx";
import Search from "./features/plants/Search.jsx";
import Account from "./features/plants/Account.jsx";
// import LoginRegister from "./features/plants";  //Waiting from login-register page file
import Maps from "./features/plants/Maps.jsx";
import Details from "./features/plants/PlantDetails.jsx";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Carousel /> },
      { path: "/Search", element: <Search /> },
      { path: "/Account", element: <Account /> },
      // { path: "/LoginRegister", element: <LoginRegister /> },
      { path: "/Maps", element: <Maps /> },
      { path: "/PlantDetails/:id", element: <Details /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </Provider>
  </React.StrictMode>
);
