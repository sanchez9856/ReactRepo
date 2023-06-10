import Body from "../components/Body";
import Header from "../components/Header";
import ResturantMenu from "../components/ResturantMenu";
import {
  render,
  waitFor,
  screen,
  findByTestId,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantData from "../mockData/restaurant-mock-data.json";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import RestaurantMenuData from "../mockData/restaurant-menu-mock.json";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantMenuData);
    },
  });
});

test("Check if restaurant menu is rendered", async () => {
  const restaurantMenu = render(
    <StaticRouter location={"/resturant/91293"}>
      <Provider store={store}>
        <Header />
        <ResturantMenu />
      </Provider>
    </StaticRouter>
  );

  await restaurantMenu.findByTestId("restaurant-menu-div");
  const menuButtons = restaurantMenu.getAllByTestId("menu-btn");
  screen.debug();
  fireEvent.click(menuButtons[0]);
  fireEvent.click(menuButtons[0]);
  expect(restaurantMenu.getByTestId("Cart").innerHTML).toBe("Cart 2");

  const cart = render(
    <StaticRouter location={"/cart"}>
      <Provider store={store}>
        <Cart />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("cart-div").children.length).toBe(2);
});
