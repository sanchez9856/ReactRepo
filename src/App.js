/**
 * Here we will build a static ui for a food delivery app
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/ProfileClass";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, createContext } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="parent-container">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

// Declaring the routing config and creating a router obj
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "resturant/:resturantId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
