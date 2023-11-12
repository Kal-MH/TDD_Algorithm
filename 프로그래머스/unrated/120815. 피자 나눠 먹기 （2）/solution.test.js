import { solution } from "./피자 나눠 먹기 （2）.js";

describe("share pizzas with people", () => {
  //NaN
  test("n must be a number", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: n must be a number");
  });

  // Not allowed a negative number or zero
  test("n must be a positive number", () => {
    expect(() => {
      solution(-1);
    }).toThrow("Error: n must be a positive number(n >= 1)");
  });

  // Not allowed a negative number or zero
  test("n must be a positive number", () => {
    expect(() => {
      solution(0);
    }).toThrow("Error: n must be a positive number(n >= 1)");
  });

  //Example
  test("example1 : n is 6, result is 1", () => {
    expect(solution(6)).toBe(1);
  });

  //Min
  test("example2: n is 1, result 1", () => {
    expect(solution(1)).toBe(1);
  });

  //Max
  test("example3: n is 100, result 50", () => {
    expect(solution(100)).toEqual(50);
  });
});
