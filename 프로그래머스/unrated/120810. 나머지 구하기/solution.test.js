import { solution } from "./나머지 구하기.js";

describe("get remainder with two numbers", () => {
  // isNaN
  test("get remainder 1 % 'a' to equal NaN", () => {
    expect(solution(1, "a")).toBe(NaN);
  });

  // num % 0
  test("get remainder 1 % 0 to equal NaN", () => {
    expect(solution(1, 0)).toBe(NaN);
  });

  // 0 / num
  test("get remainder 0 % 1000 to equal 0", () => {
    expect(solution(0, 1000)).toBe(0);
  });

  // 양수 / 양수
  test("get remainder 3 % 2 to equal 1", () => {
    expect(solution(3, 2)).toBe(1);
  });

  // Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER
  test("get remainder 10 % 5 to equal 0", () => {
    expect(solution(10, 5)).toBe(0);
  });
});
