function fetchWithCallback(callback) {
  setTimeout(() => {
    callback({ name: "jerry" });
  }, 3000);
}

function fetchWithPromise() {
  return Promise.resolve({ name: "kobe" });
}

test("test with callback", (done) => {
  function myCallback(data) {
    expect(data).toEqual({ name: "jerry" });
    done();
  }
  fetchWithCallback(myCallback);
});


test('test with promise', () => {
    fetchWithPromise().then(data => {
        expect(data).toEqual({name:'kobe'})
    })
})