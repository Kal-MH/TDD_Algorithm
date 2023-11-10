import { solution } from "./두 수의 곱";

describe("multiply with two numbers", () => {
  // 양수
  test("multiply 1 * 2 to equal 2", () => {
    expect(solution(1, 2)).toBe(2);
  });

  // 양수 + 0
  test("multiply 1 * 0 to equal 0", () => {
    expect(solution(1, 0)).toBe(0);
  });

  // 음수 + 0
  test("multiply -1 * 0 to equal -0", () => {
    expect(solution(-1, 0)).toBe(-0);
  });

  // 음수
  test("multiply -1 * -2 to equal 2", () => {
    expect(solution(-1, -2)).toBe(2);
  });

  // MAX_SAGE_INTEGER : 2^53 - 1
  test("multiply Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER to equal 8.112963841460666e+31", () => {
    expect(solution(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(
      8.112963841460666e31
    );
  });

  // MAX_VALUE : 2^1024 - 2^971, MIN_VALUE: 2^-1074
  test("multiply Number.MAX_VALUE * Number.MIN_VALUE to equal 8.881784197001251e-16", () => {
    expect(solution(Number.MAX_VALUE, Number.MIN_VALUE)).toBe(
      8.881784197001251e-16
    );
  });

  // isNaN
  test("multiply 1 * 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });
});
