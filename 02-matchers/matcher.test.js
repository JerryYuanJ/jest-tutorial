// matchers
test("test obj", () => {
  const person = {
    name: "jerry",
    age: 12,
  };

  expect(person).toEqual({
    name: "jerry",
    age: 12,
  });
});

// truthiness check
test("test truthiness", () => {
  const a = null,
    b = undefined,
    c = 2;
  expect(a).toBeNull();
  expect(a).toBeFalsy();
  expect(b).toBeUndefined();
  expect(b).toBeFalsy();
  expect(c).toBeDefined();
  expect(c).toBeTruthy();
});

// numbers check
test("test numbers", () => {
  const a = 2;
  expect(a).toBeLessThan(3);
  expect(a).toBeLessThanOrEqual(2);
  expect(a).toBeGreaterThan(1);
  expect(a).toBeGreaterThanOrEqual(2);
  expect(a).toBe(2);
  expect(a).toEqual(2);
});

// string check
test("string check", () => {
  const str = "hello";
  expect(str).toContain("lo");
  expect(str).toMatch(/hello/g);
  expect(str).not.toMatch(/jjj/);
});

// array check
test("array check", () => {
  const arr = ["kobe", "fisher", "casol", "curry"];
  expect(arr).toContain("curry");
  expect(arr).toHaveLength(4);
});

// error check
test("error check", () => {
  const getError = () => {
    throw new Error("ERR");
  };
  expect(() => getError()).toThrow();
  expect(() => getError()).toThrow(Error);
  expect(() => getError()).toThrow("ERR");
});
