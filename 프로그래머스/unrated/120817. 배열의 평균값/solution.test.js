import { solution } from "./배열의 평균값.js";

describe("array with mode", () => {
  // Not an array
  test("Not an array", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: Not an Array");
  });

  // array length: 0 -> Error
  test("Array is []", () => {
    expect(() => {
      solution([]);
    }).toThrow("Error: Array Length must be 1 or more");
  });

  // Example : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  test("Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result is 5.5", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(solution(arr)).toBe(5.5);
  });

  // array length: 100(max) with all elements is zero(0)
  test("Array [1, 1, 2, 2]", () => {
    const arr = [];

    for (let i = 0; i < 100; i++) arr.push(0);

    expect(solution(arr)).toBe(0);
  });

  // array length: 1(min)
  test("Array Length with 99 & no mode", () => {
    const arr = [1000];

    expect(solution(arr)).toBe(1000);
  });
});
