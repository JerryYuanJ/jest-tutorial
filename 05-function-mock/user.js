function getUsers() {
  return fetch("/users").then((res) => res.json());
}

module.exports = {
  getUsers,
};
