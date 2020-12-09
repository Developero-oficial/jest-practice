export const getQuote = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve("No creas todo lo que leas en internet, por Benjamin Franklin"),
      1000
    );
  });
};
