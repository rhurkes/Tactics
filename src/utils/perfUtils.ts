function stopwatch(func: () => void, iterations: number) {
  const start = Date.now();

  for (let i = 0; i < iterations; i++) {
    func();
  }

  console.log(`[${func.name}] ${iterations} iterations in ${(Date.now() - start) / 1000}s`);
}

export default {
  stopwatch,
};
