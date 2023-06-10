import sum from ".././components/sum";

test("Check sum of 2 numbers", () => {
  expect(sum(0, 0)).toBeFalsy();
});

/**
 * expect() -> returns an expectation object, the object has mulitple matcher funcions.
 */
