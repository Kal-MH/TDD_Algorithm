function solution(array) {
     if (!Array.isArray(array)) throw new Error("Error: Not an Array");
  if (array.length % 2 === 0)
    throw new Error("Error: Array Length must be odd");

  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}