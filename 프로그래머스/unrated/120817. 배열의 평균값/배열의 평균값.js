export function solution(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Error: Not an Array");
  if (numbers.length === 0)
    throw new Error("Error: Array Length must be 1 or more");

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum / numbers.length;
}
