function createCounter(init) {
  const input = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: () => {
      init = input;
      return init;
    },
  };
}

const counter = createCounter(5);
console.log(
  counter.increment(),
  counter.reset(),
  counter.decrement(),
  counter.increment(),
  counter.increment()
);
