import Body from "../components/Body";
import Header from "../components/Header";
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

/**
 *
 */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantData);
    },
  });
});

test("Check if the Shimmer is rendered", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-ui");
  console.log(shimmer);
  expect(shimmer.children.length).toBe(10);
});

test("Check if search input is rendered", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // await waitFor(() => expect(screen.getByTestId("search-btn")));

  /**
   * There are 3 search variabnts.
   * 1.getBy => used by default
   * 2.queryBy => If we want to assert something being not present in the dom , this is beacuse getBy will throw an error if
   *              it is unable to find that element and thus we will not be able to assert the element being not present.
   * 3.findBy => It is generally used for asynchronous operations. If some element will be rendered asynchronouslym, then
   *             we can wait for the element to get rendered using await findBy to and then use expect statement.
   */

  // body.fincByTestId() => this will wait untill the search button is rendered.
  // much better way than waitFor()
  expect(await body.findByTestId("search-btn")).toBeInTheDocument();

  // const button = body.getByTestId("search-btn");
  // expect(button).toBeInTheDocument();

  /**
   * screen.debug() => This prints the dom that is being rendered by the render function and used to check
   * what is rendered by the render function
   */
  // screen.debug();
  const restaurantCard = body.getByTestId("restaurant-card");
  expect(restaurantCard.children.length).toBe(15);
});

test("Check the search functionality", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // screen.debug();

  await body.findByTestId("search-input");
  expect(body.getByTestId("search-input")).toBeInTheDocument();
  expect(body.getByTestId("search-btn")).toBeInTheDocument();

  /**
   * using fireEvent we can simulate the user behavaviour.
   *
   * Here fireEvent.change will simulate the user behaviour of entering a text in the input control.
   * Here fireEvent.click simulates the user behaviour of clicking a button.
   */
  fireEvent.change(body.getByTestId("search-input"), {
    target: {
      value: "Sugar",
    },
  });

  fireEvent.click(body.getByTestId("search-btn"));
  expect(body.getByTestId("restaurant-card").children.length).toBe(1);
});
