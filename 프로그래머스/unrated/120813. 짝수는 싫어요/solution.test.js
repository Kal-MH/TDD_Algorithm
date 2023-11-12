import { solution } from "./짝수는 싫어요.js";

describe("Not allowed odd numbers", () => {
  //NaN
  test("n must be a number", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: n must be a number");
  });

  //Example
  test("example1 : n is 10", () => {
    expect(solution(10)).toEqual([1, 3, 5, 7, 9]);
  });

  //Min
  test("example2: n is 1", () => {
    expect(solution(1)).toEqual([1]);
  });

  //Max
  test("example3: n is 100", () => {
    const arr = [];

    for (let i = 1; i < 100; i += 2) arr.push(i);
    expect(solution(100)).toEqual(arr);
  });
});
