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
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  return (
    <div className="parent-container">
      <Header />
      <Outlet />
    </div>
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
      {
        path: "profile",
        element: <Profile />,
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
