export function solution(n) {
  if (isNaN(n)) throw new Error("Error: n must be a number");
  if (n <= 0) throw new Error("Error: n must be a positive number(n >= 1)");

  let i = 1;

  while (i <= 1000) {
    if ((n * i) % 6 === 0) break;
    i++;
  }

  return Number((n * i) / 6);
}
