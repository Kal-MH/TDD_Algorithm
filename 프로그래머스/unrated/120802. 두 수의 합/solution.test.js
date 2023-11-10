import { solution } from "./두 수의 합.js";

describe("sum with two numbers", () => {
  // 양수
  test("adds 1 + 2 to equal 3", () => {
    expect(solution(1, 2)).toBe(3);
  });

  // 음수 + 0
  test("adds -1 + 0 to equal -1", () => {
    expect(solution(-1, 0)).toBe(-1);
  });

  // 음수
  test("adds -1 + -2 to equal -3", () => {
    expect(solution(-1, -2)).toBe(-3);
  });

  // MAX_SAGE_INTEGER : 2^53 - 1
  test("adds Number.MAX_SAFE_INTEGER +  Number.MAX_SAFE_INTEGER to equal 18014398509481982", () => {
    expect(solution(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(
      18014398509481982
    );
  });

  // MAX_VALUE : 2^1024 - 2^971
  test("adds Number.MAX_VALUE + Number.MAX_VALUE to equal Infinity", () => {
    expect(solution(Number.MAX_VALUE, Number.MAX_VALUE)).toBe(Infinity);
  });

  // isNaN
  test("adds 1 + 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });
});
