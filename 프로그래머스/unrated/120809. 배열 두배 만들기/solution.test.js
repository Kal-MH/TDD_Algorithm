import { solution } from "./배열 두배 만들기.js";

describe("array with double", () => {
  // Not an array
  test("Not an array", () => {
    expect(() => {
      solution("a");
    }).toThrow("Error: Not an Array");
  });

  // array length
  test("Array Length with 0", () => {
    const arr = [];

    expect(solution(arr)).toEqual([]);
  });

  // min
  test("Array Length with 1", () => {
    const arr = [1];

    expect(solution(arr)).toEqual([2]);
  });

  // max
  test("Array Length with 1000", () => {
    const arr = [];
    const result = [];

    for (let a = 1; a <= 1000; a++) arr.push(a);
    for (let r = 0; r < 1000; r++) result.push(arr[r] * 2);

    expect(solution(arr)).toEqual(result);
  });
});
