{/* <div id="parent">
  <div id="child">
    <h1>This is an h1</h1>
    <h2> This is an h2 </h2>
  </div>
  <div id="child2">
    <h1>This is an h1</h1>
    <h2> This is an h2 </h2>
  </div>
</div>; */}

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is an h1"),
    React.createElement("h2", {}, "This is an h2")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "This is an h1"),
    React.createElement("h2", {}, "This is an h2")]
  )]
);

//In order to simplify the above code we use JSX(Babel)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log("End of program");
