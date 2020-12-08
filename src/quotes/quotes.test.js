import { getQuote } from "./";

test("getQuote", (done) => {
  getQuote((quote) => {
    expect(quote).toBe(
      "No creas todo lo que leas en internet, por Benjamin Franklin"
    );
    done();
  });
});
