import { solution } from "./몫 구하기.js";

describe("share with two numbers", () => {
  // isNaN
  test("share 1 / 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });

  // num / 0
  test("share 1 / 0 to equal Infinity", () => {
    expect(solution(1, 0)).toBe(Infinity);
  });

  // 0 / num
  test("share 0 / 1000 to equal 0", () => {
    expect(solution(0, 1000)).toBe(0);
  });

  // 양수 / 양수
  test("share 100 / 5 to equal 20", () => {
    expect(solution(100, 5)).toBe(20);
  });

  // 음수 / 양수
  test("share -100 / 5 to equal -20", () => {
    expect(solution(-100, 5)).toBe(-20);
  });

  // Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER
  test("share Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER to equal 1", () => {
    expect(solution(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(1);
  });

  // Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
  test("share Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER to equal -1", () => {
    expect(solution(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(-1);
  });
});
