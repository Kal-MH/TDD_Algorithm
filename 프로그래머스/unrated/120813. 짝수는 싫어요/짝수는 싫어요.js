export function solution(n) {
  if (isNaN(n)) throw new Error("Error: n must be a number");

  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) continue;
    answer.push(i);
  }

  return answer;
}
