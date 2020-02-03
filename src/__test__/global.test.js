const text = "test";

test("check text", () => {
  expect(text).toMatch(/test/);
});
