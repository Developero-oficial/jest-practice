import { calculator } from "./index";

test("sum", () => {
  expect(calculator.sum(1, 2)).toEqual(3);
});
