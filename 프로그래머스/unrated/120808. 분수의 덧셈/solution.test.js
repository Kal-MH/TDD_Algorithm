import { solution } from "./분수의 덧셈.js";

describe("fraction addition", () => {
  // NaN
  test("NaN", () => {
    expect(solution(1, 2, 3, "a")).toBe(NaN);
  });

  // range 0 초과 1000 미만
  // wrapping 함수로 감싼다음 호출하기 -> https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
  test("arguments range must be 0 < (arg) < 1000", () => {
    expect(() => {
      solution(0, 1, 2, 3);
    }).toThrow("Error: Out of Range(0 < num < 1000)");
  });

  // 1/2 + 3/4
  test("1 / 2 + 3 / 4 = 5 / 4", () => {
    expect(solution(1, 2, 3, 4)).toStrictEqual([5, 4]);
  });

  // 9/2 + 1/3
  test("9 / 2 + 1 / 3 = 29 / 6", () => {
    expect(solution(9, 2, 1, 3)).toStrictEqual([29, 6]);
  });
});
