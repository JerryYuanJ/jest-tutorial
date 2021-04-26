function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

describe("mock functions", () => {
  test("test mock functions", () => {
    const mockFn = jest.fn((x) => x + 10);
    forEach([0, 1, 2], mockFn);
    // called times
    expect(mockFn.mock.calls.length).toEqual(3);
    // arguments
    expect(mockFn.mock.calls[2][0]).toEqual(2);
    // return value
    expect(mockFn.mock.results[0].value).toEqual(10);
  });

  test("test with new keyword", () => {
    const mockFn = jest.fn();
    const obj = new mockFn();
    expect(mockFn.mock.instances.length).toEqual(1);
  });

  test("test return values", () => {
    const mockFn = jest.fn();
    mockFn
      .mockReturnValueOnce("zhangsan")
      .mockReturnValueOnce({ code: 200 })
      .mockReturnValue(12);
    expect(mockFn()).toEqual("zhangsan");
    expect(mockFn()).toEqual({ code: 200 });
    expect(mockFn()).toEqual(12);
    expect(mockFn()).toEqual(12);
  });

  test("test return value in practical", () => {
    const filterFn = jest.fn();
    filterFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [10, 20].filter((i) => filterFn(i));
    expect(result).toEqual([10]);
    expect(filterFn.mock.calls.length).toEqual(2);
  });
});
