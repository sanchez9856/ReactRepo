import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Hi this is an H1 tag");
// JSX This is not a JS, this is not a react code either, it a JSX code
// So how JSX  code is getting converted to React code -> This conversion is done by BABEL
// BABEL-> is a JS compiler that converts Jsx to React code
// The below and above code are exactly the same

// const jsxHeading = <h1 id="heading">Hi this is an H1 tag</h1>;

// React components
// -> There are 2 types of react components
// Class based components => They are not used anymore
// Functional component -> they are simple Js functions that returns a piece of JSX code/react element.
// name of functional componentys starts with caps

const heading = <h1>This is an h1 tag from react element</h1>;

const Title = () => {
  return <h1>This is Title component</h1>;
};

const Para = () => {
  return <p>This is a paragraph component</p>;
};

// embedding a functional component inside a react elem

const reactEle = (
  <div>
    <h1>This is react element</h1>
    <Para />
  </div>
);

// embedding react component inside another component
// embedding react element inside a functional compnent -> we use {}
// we can include any piece of JS code inside functional comp using {}
// React Fragments -> They act as parent component and are not visible in html
const HeadingComponent = () => (
  <>
  <div id="container">
      <Title />
      {heading}
      <h2 id="heading">This is h1 tag from React component</h2>
      <Para />
    </div>
    <div></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
