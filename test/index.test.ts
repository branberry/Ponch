describe("index test", () => {
  it("fails because I don't know what to test", () => {
    // creating fake code to simulate what ponch should do

    function call<T, P = unknown[]>(func: (...params: P[]) => T) {
      let result;
      try {
        result = func(params);
      } catch (error) {
        result = error;
      }

      return result;
    }

    const getStuff: () => Promise<unknown> = () =>
      Promise.resolve(
        setTimeout(() => {
          console.log("hello!");
        }, 2000)
      );

    getStuff();
  });
});
