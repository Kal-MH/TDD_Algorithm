export function solution(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return NaN;

  return Number((num1 / num2) * 1000);
}
