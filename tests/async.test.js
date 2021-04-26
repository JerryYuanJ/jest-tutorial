function fetchWithCallback(callback) {
  setTimeout(() => {
    callback({ name: "jerry" });
  }, 3000);
}

function fetchWithPromise() {
  return Promise.resolve({ name: "kobe" });
}

function fetchWithPromiseFail() {
  return Promise.reject("bad");
}

test("test with callback", (done) => {
  function myCallback(data) {
    expect(data).toEqual({ name: "jerry" });
    done();
  }
  fetchWithCallback(myCallback);
});

test("test with promise: success", () => {
  return fetchWithPromise().then((data) => {
    expect(data).toEqual({ name: "kobe" });
  });
});

test("test with promise: fail", () => {
  return fetchWithPromiseFail().catch((e) => {
    expect(e).toBe("bad");
  });
});

test("test with resolves", () => {
  return expect(fetchWithPromise()).resolves.toEqual({ name: "kobe" });
});

test("test with rejects", () => {
  return expect(fetchWithPromiseFail()).rejects.toEqual("bad");
});

test("test with async", async () => {
  const data = await fetchWithPromise();
  expect(data).toEqual({ name: "kobe" });

  // should be inside try...catch block
  try {
    await fetchWithPromiseFail();
  } catch (e) {
    expect(e).toEqual("bad");
  }
});
