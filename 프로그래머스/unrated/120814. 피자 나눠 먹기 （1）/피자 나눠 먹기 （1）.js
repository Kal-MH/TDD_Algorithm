export function solution(n) {
  if (isNaN(n)) throw new Error("Error: n must be a number");
  if (n <= 0) throw new Error("Error: n must be a positive number(n >= 1)");

  return Math.ceil(n / 7);
}
