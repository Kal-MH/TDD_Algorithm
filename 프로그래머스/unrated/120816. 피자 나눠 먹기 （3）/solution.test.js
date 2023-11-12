import { solution } from "./피자 나눠 먹기 （3）.js";

describe("share pizzas with people", () => {
  //NaN
  test("n must be a number", () => {
    expect(() => {
      solution(2, "a");
    }).toThrow("Error: n must be a number");
  });

  // Not allowed a negative number or zero
  test("n must be a positive number", () => {
    expect(() => {
      solution(2, -1);
    }).toThrow("Error: n must be a positive number(n >= 1)");
  });

  // Not allowed a negative number or zero
  test("n must be a positive number", () => {
    expect(() => {
      solution(2, 0);
    }).toThrow("Error: n must be a positive number(n >= 1)");
  });

  // 2 <= slice <= 10
  test("The number of slices must be between 2 and 10.", () => {
    expect(() => {
      solution(1, 10);
    }).toThrow("Error: The number of slices must be between 2 and 10");
  });

  //Example
  test("example1 : n is 10 slice is 7, result is 2", () => {
    expect(solution(7, 10)).toBe(2);
  });

  //Min
  test("example2: n is 1, slice is 2, result 1", () => {
    expect(solution(2, 1)).toBe(1);
  });

  //Max
  test("example3: n is 100, slice 10, result 10", () => {
    expect(solution(10, 100)).toEqual(10);
  });
});
