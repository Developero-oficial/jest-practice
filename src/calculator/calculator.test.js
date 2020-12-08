import { calculator } from "./index";

expect.extend({
  toBeNumberTwo(received) {
    if (received !== 2) {
      return {
        pass: false,
        message: () => `Expected ${received} to be number 2`,
      };
    }

    return {
      pass: true,
    };
  },
});

test("sum", () => {
  expect(calculator.sum(1, 2)).toEqual(3);
});

test("custom matcher", () => {
  expect(2).toBeNumberTwo();
});
