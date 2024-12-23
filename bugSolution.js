function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or throw an error: throw new Error('Inputs must be numbers');
  }

  return a + b;
}