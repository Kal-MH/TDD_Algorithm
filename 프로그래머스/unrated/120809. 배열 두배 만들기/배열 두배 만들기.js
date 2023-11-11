export function solution(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Error: Not an Array");

  return numbers.map((n) => n * 2);
}
