import Header from "../components/Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { toBeInTheDocument } from "@testing-library/jest-dom";

// test("Check if logo is present in header", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );
// console.log(header);

// const logo = header.getByTestId("logo");
// expect(logo).toBeInTheDocument();
// });

// test("Check if cart contains 0 items on render", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );

//   // grab the cart
//   const cart = header.getByTestId("Cart");
//   console.log(cart);
//   expect(cart.innerHTML.split(" ")[1]).toBe("0");
// });

test("Check if about us component is rendered", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const aboutus = header.getByTestId("About Us");
  const logo = header.getByTestId("logo");
  const cart = header.getByTestId("Cart");
  expect(logo).toBeInTheDocument();
  expect(aboutus).toBeInTheDocument();
  expect(cart.innerHTML.split(" ")[1]).toBe("0");
});
