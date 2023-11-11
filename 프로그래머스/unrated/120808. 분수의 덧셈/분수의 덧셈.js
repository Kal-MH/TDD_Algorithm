export function solution(numer1, denom1, numer2, denom2) {
  if (isNaN(numer1) || isNaN(denom1) || isNaN(numer2) || isNaN(denom2))
    return NaN;

  if (
    numer1 <= 0 ||
    numer1 >= 1000 ||
    denom1 <= 0 ||
    denom1 >= 1000 ||
    numer2 <= 0 ||
    numer2 >= 1000 ||
    denom2 <= 0 ||
    denom2 >= 1000
  )
    throw new Error("Error: Out of Range(0 < num < 1000)");

  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  const bound = numer < denom ? numer : denom;
  let maxDivisor = 1;
  for (let i = 2; i <= bound; i++) {
    if (numer % i === 0 && denom % i === 0) {
      maxDivisor = i;
    }
  }

  return [numer / maxDivisor, denom / maxDivisor];
}
