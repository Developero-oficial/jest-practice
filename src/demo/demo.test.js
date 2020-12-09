beforeAll(() => {
  console.log("Antes de todas");
});

beforeEach(() => {
  console.log("Antes de cada una");
});

afterEach(() => {
  console.log("Después de cada una");
});

afterAll(() => {
  console.log("Después de todas");
});

test("first test", () => {
  console.log("primera prueba");
  expect(true).toBe(true);
});

test("second test", () => {
  console.log("segunda prueba");
  expect(true).toBe(true);
});
