const userService = require("./user");

jest.mock("./user");

test("should fetch users", () => {
  const users = [{ name: "jerry" }];
  const resp = { data: users };
  // userService.getUsers.mockImplementation(() => Promise.resolve(resp))
  userService.getUsers.mockResolvedValue(resp);
  return userService.getUsers().then((data) => {
    expect(data.data).toEqual(users);
  });
});
