function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  return a + b; // potential error here if a or b is not a number
}