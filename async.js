function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

await wait(1000);