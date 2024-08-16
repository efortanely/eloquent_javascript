class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
  if (Math.random() < 0.2) {
    return x * y;
  } else {
    throw new MultiplicatorUnitFailure("Fail");
  }
}

function reliableMultiply(x, y) {
  while (true) {
    try {
      return primitiveMultiply(x, y);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error;
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  console.log(reliableMultiply(1, i));
}
