test("1 is 1", () => {
  expect(1).toBe(1);
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});
