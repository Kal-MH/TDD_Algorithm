import { solution } from "./중앙값 구하기.js";

describe("array with middle value", () => {
  // Not an array
  test("Not an array", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: Not an Array");
  });

  // array length
  test("Array Length must be odd", () => {
    const arr = [];

    expect(() => {
      solution([1, 2]);
    }).toThrow("Error: Array Length must be odd");
  });

  // example1
  test("Array [1, 2, 7, 10, 11]", () => {
    const arr = [1, 2, 7, 10, 11];

    expect(solution(arr)).toBe(7);
  });

  // min
  test("Array [1]", () => {
    const arr = [1];

    expect(solution(arr)).toBe(1);
  });

  // max
  test("Array Length with 99", () => {
    const arr = [];

    for (let a = 1; a < 100; a++) arr.push(a);

    expect(solution(arr)).toBe(50);
  });
});
