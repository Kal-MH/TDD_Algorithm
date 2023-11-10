import { solution } from "./두 수의 차.js";

describe("subtract with two numbers", () => {
  // 양수
  test("subs 1 - 2 to equal -1", () => {
    expect(solution(1, 2)).toBe(-1);
  });

  // 음수 + 0
  test("subs -1 - 0 to equal -1", () => {
    expect(solution(-1, 0)).toBe(-1);
  });

  // 음수
  test("subs -1 - (-2) to equal 1", () => {
    expect(solution(-1, -2)).toBe(1);
  });

  // MAX_SAGE_INTEGER : 2^53 - 1
  test("subs Number.MAX_SAFE_INTEGER -  Number.MAX_SAFE_INTEGER to equal 0", () => {
    expect(solution(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(0);
  });

  // MIN_SAGE_INTEGER : - (2^53 - 1)
  test("subs Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER to equal -18014398509481982", () => {
    expect(solution(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(
      -18014398509481982
    );
  });

  // MAX_VALUE : 2^1024 - 2^971, MIN_VALUE: 2^-1074
  test("subs Number.MAX_VALUE - Number.MIN_VALUE to equal Infinity", () => {
    expect(solution(Number.MAX_VALUE, Number.MIN_VALUE)).toBe(
      1.7976931348623157e308
    );
  });

  // isNaN
  test("subs 1 + 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });
});
