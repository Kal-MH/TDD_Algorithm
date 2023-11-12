export function solution(slice, n) {
  if (isNaN(n)) throw new Error("Error: n must be a number");
  if (n <= 0) throw new Error("Error: n must be a positive number(n >= 1)");
  if (slice < 2 || slice > 10)
    throw new Error("Error: The number of slices must be between 2 and 10");

  let pizzaCnt = 1;

  while (true) {
    if ((slice * pizzaCnt) / n >= 1) break;
    pizzaCnt++;
  }

  return pizzaCnt;
}
