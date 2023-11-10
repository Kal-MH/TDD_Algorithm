import { solution } from "./숫자 비교하기.js";

describe("compare two numbers", () => {
  // isNaN
  test("compare 1, 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });

  // 양수, 양수
  test("compare 1, 1 to equal 1", () => {
    expect(solution(1, 1)).toBe(1);
  });

  // 양수, 0
  test("compare 1, 0 to equal -1", () => {
    expect(solution(1, 0)).toBe(-1);
  });

  // 양수, 음수
  test("compare 1, -1 to equal -1", () => {
    expect(solution(1, -1)).toBe(-1);
  });

  // Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
  test("compare Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER to equal 1", () => {
    expect(solution(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(1);
  });
});
