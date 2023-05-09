/**
 * Here we will build a static ui for a food delivery app
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="parent-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
