const colors = [];

beforeAll((done) => {
  setTimeout(() => {
    colors.push("red", "green", "blue");
    done();
  }, 1000);
});

afterAll(() => {
  colors.length = 0;
});

beforeEach(() => {
  colors.push("newColor");
});

test("length of array should equal 3 + 1", () => {
  expect(colors.length).toEqual(4);
});

// scope the tests
// pay attention to the order of excutions
describe("outer", () => {
  console.log("describe outer-a");

  describe("describe inner 1", () => {
    console.log("describe inner 1");
    test("test 1", () => {
      console.log("test for describe inner 1");
      expect(true).toEqual(true);
    });
  });

  console.log("describe outer-b");

  test("test 1", () => {
    console.log("test for describe outer");
    expect(true).toEqual(true);
  });

  describe("describe inner 2", () => {
    console.log("describe inner 2");
    test("test for describe inner 2", () => {
      console.log("test for describe inner 2");
      expect(false).toEqual(false);
    });
  });

  console.log("describe outer-c");
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

// 这个是当前文件中唯一执行的 test
test.only("This is a only running test", () => {
  expect(true).toBe(true);
});
