const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola desde Santiago - Chile, en un día muy caluroso!");
  });
});
